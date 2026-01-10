import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || `https://prsbwhvqugthmqlbpovs.supabase.co`;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByc2J3aHZxdWd0aG1xbGJwb3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTA1MzEsImV4cCI6MjA4MzYyNjUzMX0.gPoBn3N8TPtGlz_LDvArLl_nFbydlOKcZVhNfizKjM4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

