import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://lnjxqzyrlxcfxwlclziq.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuanhxenlybHhjZnh3bGNsemlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1NDMxNTMsImV4cCI6MjAwODExOTE1M30.SOZT68oT579cq0qhZm-a5CtyILRNOAvIiEpEnt8MLLw"

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)