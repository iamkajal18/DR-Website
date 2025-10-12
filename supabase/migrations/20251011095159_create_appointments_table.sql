/*
  # Create Appointments Table

  ## Description
  Creates a table to store patient appointment bookings with necessary fields for contact and scheduling.

  ## Tables Created
  - `appointments`
    - `id` (uuid, primary key) - Unique identifier for each appointment
    - `name` (text, required) - Patient's full name
    - `email` (text, required) - Patient's email address
    - `phone` (text, required) - Patient's phone number
    - `preferred_date` (date, required) - Preferred appointment date
    - `preferred_time` (text, required) - Preferred appointment time slot
    - `message` (text, optional) - Additional notes or concerns from patient
    - `status` (text, required) - Appointment status (pending, confirmed, cancelled, completed)
    - `created_at` (timestamptz) - Timestamp when appointment was booked
    - `updated_at` (timestamptz) - Timestamp when appointment was last updated

  ## Security
  - Enable RLS on appointments table
  - Allow public to insert new appointments (for booking form)
  - Allow authenticated users to view appointments
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_email ON appointments(email);
