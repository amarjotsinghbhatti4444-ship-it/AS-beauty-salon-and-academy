import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xrrmxonszhgwuocftbas.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhycm14b25zemhnd3VvY2Z0YmFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5OTE0MzgsImV4cCI6MjA5NjU2NzQzOH0.-7xy1XyeY-pU7goHLYpk1TnjBOd2CY_yEuNSjvvWBRM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);