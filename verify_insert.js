
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kuiqgpzngpupeyapgqxp.supabase.co'
// Using the anon key currently in the file (based on previous steps)
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1aXFncHpuZ3B1cGV5YXBncXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNDMyNjksImV4cCI6MjA4NDcxOTI2OX0.5JJfMUbA6sAFBON6c4eBWYUe2WAc58q9KTQFnw0blRM'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testInsert() {
    console.log('Testing Insert into comments table...')
    try {
        const { data, error } = await supabase
            .from('comments')
            .insert([
                { name: 'Debug Bot', message: 'Test comment from debug script' }
            ])
            .select()

        if (error) {
            console.error('INSERT FAILED:', error)
            console.error('Message:', error.message)
            console.error('Details:', error.details)
            console.error('Hint:', error.hint)
            console.error('Code:', error.code)
        } else {
            console.log('INSERT SUCCESSFUL:', data)
        }
    } catch (err) {
        console.error('Unexpected error:', err)
    }
}

testInsert()
