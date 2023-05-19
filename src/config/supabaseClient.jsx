import { createClient } from '@supabase-js'

const supabaseUr1 = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY
const supabase = createClient(supabaseUr1, supabaseKey)

export default supabase
