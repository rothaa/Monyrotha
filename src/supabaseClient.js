
import { createClient } from '@supabase/supabase-js'

// TODO: Replace with your actual project URL found in Supabase Settings > API
const supabaseUrl = 'https://kuiqgpzngpupeyapgqxp.supabase.co' // e.g. https://xyz.supabase.co

// User provided key
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1aXFncHpuZ3B1cGV5YXBncXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNDMyNjksImV4cCI6MjA4NDcxOTI2OX0.5JJfMUbA6sAFBON6c4eBWYUe2WAc58q9KTQFnw0blRM'

export const supabase = createClient(supabaseUrl, supabaseKey)
