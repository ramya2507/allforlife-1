DROP TABLE IF EXISTS job_postings CASCADE;

CREATE TABLE job_postings(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  issue VARCHAR(255),
  type_of_therapy VARCHAR(255),
  issurance VARCHAR(255),
  age VARCHAR(255),
  sexuality VARCHAR(255),
  expected_treatment_duration VARCHAR(255),
  time_requirement VARCHAR(255),
  available_time VARCHAR(255),
  per_appointment BOOLEAN DEFAULT TRUE,
  complete_treatment BOOLEAN,
  min_price INTEGER NOT NULL,
  max_price INTEGER NOT NULL,
  category VARCHAR(255),
  language VARCHAR(255),
  ethnicity VARCHAR(255),
  faith VARCHAR(255),
  country VARCHAR(255),
  professional_expertise VARCHAR(255),
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE
);