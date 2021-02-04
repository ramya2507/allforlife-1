DROP TABLE IF EXISTS bids CASCADE;

CREATE TABLE bids (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT,
  fee VARCHAR NOT NULL,
  is_hourly BOOLEAN,
  is_complete_treatment BOOLEAN,
  available_time VARCHAR,
  provider_id INTEGER REFERENCES providers(id) ON DELETE CASCADE,
  job_posting_id INTEGER REFERENCES job_postings(id) ON DELETE CASCADE
);