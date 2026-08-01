import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://wbtjxmgrttcrjabmnbzh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndidGp4bWdydHRjcmphYm1uYnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2MDc5ODUsImV4cCI6MjEwMTE4Mzk4NX0.ZbawN_MHiDSWEeF4JAxaCEbxv-zB5P36m4QrtGdUis4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);