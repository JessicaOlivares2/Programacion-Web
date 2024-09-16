// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cfrlacqaaixnyzfefziw.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmcmxhY3FhYWl4bnl6ZmVmeml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1MDcyNTIsImV4cCI6MjA0MjA4MzI1Mn0.IHdY1XZVTXqolWV2btqGlflWPhCU3tmbO-FqCGW6Mv4";
export const supabase = createClient(supabaseUrl, supabaseKey);
