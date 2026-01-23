
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kuiqgpzngpupeyapgqxp.supabase.co'
const supabaseKey = 'sb_publishable_m0Ko4cWuoTB-0C-e8OdUnQ_B7KcTKwQ'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
    console.log('Testing Supabase connection...')
    try {
        const { data, error } = await supabase.from('comments').select('*').limit(1)
        if (error) {
            console.error('Connection failed:', error.message)
        } else {
            console.log('Connection successful! Data:', data)
        }
    } catch (err) {
        console.error('Unexpected error:', err)
    }
}

testConnection()
