
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zsdxokcstkrzewgzdnqf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzZHhva2NzdGtyemV3Z3pkbnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1MzcxOTksImV4cCI6MTk4MjExMzE5OX0.wfBn1XjojNLFMDKS-duOpK7Na3-pbAv7-UAy5LEI_5w'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
