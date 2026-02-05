
import React, { useState, useEffect, useRef } from 'react'
import { supabase } from '../supabaseClient'

const Comments = () => {
    const [comments, setComments] = useState([])
    const [formData, setFormData] = useState({ name: '', message: '' })
    const [loading, setLoading] = useState(true)
    const commentsContainerRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)

    // Fetch comments on mount and subscribe to changes
    useEffect(() => {
        fetchComments()

        // Real-time subscription
        const subscription = supabase
            .channel('comments_channel')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, (payload) => {
                console.log('New comment received:', payload)
                setComments((prev) => {
                    // Prevent duplicate if already added by optimistic update
                    if (prev.some(c => c.id === payload.new.id)) return prev
                    return [payload.new, ...prev]
                })
            })
            .subscribe((status) => {
                console.log('Supabase Realtime Status:', status)
            })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    // Autoscroll effect - Seamless infinite loop
    useEffect(() => {
        if (!commentsContainerRef.current || isHovering || comments.length === 0) return

        const container = commentsContainerRef.current
        let scrollInterval

        const autoScroll = () => {
            const maxScroll = container.scrollHeight - container.clientHeight
            const currentScroll = container.scrollTop

            // Check if we've reached or passed the bottom
            if (currentScroll + 1 >= maxScroll) {
                // Reset to top instantly for seamless loop
                container.scrollTop = 0
            } else {
                // Continue scrolling down smoothly
                container.scrollTop += 1
            }
        }

        // Start the interval - 40ms gives smooth scrolling
        scrollInterval = setInterval(autoScroll, 40)

        return () => {
            if (scrollInterval) clearInterval(scrollInterval)
        }
    }, [comments, isHovering])

    const fetchComments = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('comments')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) throw error
            if (data) setComments(data)
        } catch (error) {
            console.error('Error fetching comments:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name.trim() || !formData.message.trim()) return

        try {
            const { data, error } = await supabase
                .from('comments')
                .insert([
                    {
                        name: formData.name,
                        message: formData.message
                    }
                ])
                .select() // Return the inserted data

            if (error) throw error

            // Immediate update (Optimistic UI)
            if (data && data.length > 0) {
                setComments((prev) => [data[0], ...prev])
            }

            // Clear form
            setFormData({ name: '', message: '' })
        } catch (error) {
            console.error('Error adding comment:', error.message)
            alert(`Failed to post comment: ${error.message}`)
        }
    }

    // --- UI Styles & Helpers ---

    const getInitials = (name) => {
        return name
            ? name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
            : '?'
    }

    const glassStyle = {
        background: 'rgba(30, 41, 59, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
    }

    const inputStyles = {
        width: '100%',
        padding: '1.25rem',
        borderRadius: '1rem',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        color: 'var(--text-primary)',
        marginBottom: '1.5rem',
        fontFamily: 'inherit',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        outline: 'none',
    }

    const buttonStyles = {
        background: 'var(--accent-gradient)',
        color: 'white',
        padding: '1.25rem 2.5rem',
        borderRadius: '1rem',
        fontWeight: '700',
        fontSize: '1.1rem',
        width: '100%',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 10px 20px -5px rgba(236, 72, 153, 0.4)',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
    }

    return (
        <section id="comments" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Blob for aesthetics */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '-10%',
                width: '400px',
                height: '400px',
                background: 'var(--accent-primary)',
                filter: 'blur(150px)',
                opacity: '0.15',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Community Feedback</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>

                    {/* Form Section */}
                    <div className="animate-slide-up" style={{ ...glassStyle, padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                        <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: '2rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                            Drop a Message
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={inputStyles}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--accent-primary)'
                                        e.target.style.boxShadow = '0 0 0 2px rgba(236, 72, 153, 0.2)'
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(148, 163, 184, 0.1)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                                <textarea
                                    placeholder="Write your thoughts here..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{ ...inputStyles, resize: 'vertical' }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'var(--accent-primary)'
                                        e.target.style.boxShadow = '0 0 0 2px rgba(236, 72, 153, 0.2)'
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(148, 163, 184, 0.1)'
                                        e.target.style.boxShadow = 'none'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                style={buttonStyles}
                                onMouseOver={(e) => {
                                    e.target.style.transform = 'translateY(-2px)'
                                    e.target.style.boxShadow = '0 15px 30px -5px rgba(236, 72, 153, 0.5)'
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = 'translateY(0)'
                                    e.target.style.boxShadow = '0 10px 20px -5px rgba(236, 72, 153, 0.4)'
                                }}
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>

                    {/* Comments List */}
                    <div className="animate-slide-up delay-200">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.75rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                                Recent Thoughts
                            </h3>
                            <span style={{
                                background: 'rgba(236, 72, 153, 0.1)',
                                color: 'var(--accent-primary)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                fontSize: '0.9rem',
                                fontWeight: '600'
                            }}>
                                {comments.length}
                            </span>
                        </div>

                        <div
                            ref={commentsContainerRef}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            style={{
                                maxHeight: '600px',
                                overflowY: 'auto',
                                paddingRight: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                // Hide scrollbar for Chrome, Safari and Opera
                                scrollbarWidth: 'none', // Firefox
                                msOverflowStyle: 'none', // IE and Edge
                            }}
                            className="hide-scrollbar"
                        >
                            {loading ? (
                                <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                                    <div className="floating-blob" style={{ width: '40px', height: '40px', background: 'var(--accent-primary)', borderRadius: '50%', margin: '0 auto 1rem', opacity: 0.5 }}></div>
                                    <p>Loading conversation...</p>
                                </div>
                            ) : comments.length === 0 ? (
                                <div style={{ ...glassStyle, padding: '3rem', textAlign: 'center' }}>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                        It's quiet here... <br />be the first to share something amazing!
                                    </p>
                                </div>
                            ) : (
                                comments.map((comment) => (
                                    <div key={comment.id || Math.random()} style={{
                                        ...glassStyle,
                                        borderRadius: '1rem',
                                        padding: '1.5rem',
                                        transition: 'transform 0.2s ease, background 0.2s ease',
                                    }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.02)'
                                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)'
                                            e.currentTarget.style.background = 'rgba(30, 41, 59, 0.4)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                                            {/* Avatar Placeholder */}
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                fontWeight: 'bold',
                                                fontSize: '0.9rem',
                                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                            }}>
                                                {getInitials(comment.name)}
                                            </div>
                                            <div>
                                                <div style={{ color: 'var(--text-primary)', fontWeight: '700', fontSize: '1.05rem' }}>
                                                    {comment.name}
                                                </div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                                    {comment.created_at ? new Date(comment.created_at).toLocaleDateString() : 'Just now'} • {comment.created_at ? new Date(comment.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                                </div>
                                            </div>
                                        </div>
                                        <p style={{ color: 'var(--text-primary)', lineHeight: '1.7', fontSize: '1rem', paddingLeft: 'calc(40px + 1rem)' }}>
                                            {comment.message}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments
