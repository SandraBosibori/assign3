import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://sfboymnizmovogtrlftg.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmYm95bW5pem1vdm9ndHJsZnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxMDY3NzAsImV4cCI6MjAwNzY4Mjc3MH0.E-wvAR0cvwX7LP1pzKQAN2JhowA6WmBv2rP7g03PrLg"

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)