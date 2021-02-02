DROP TABLE IF EXISTS provider_bids CASCADE;

CREATE TABLE provider_bids (
  id SERIAL PRIMARY KEY NOT NULL,
  description TEXT,
  fee VARCHAR NOT NULL,
  is_hourly BOOLEAN,
  is_complete_treatment BOOLEAN,
  available_time VARCHAR,
  provider_id INTEGER REFERENCES providers(id) ON DELETE CASCADE,
  bid_id INTEGER REFERENCES bids(id) ON DELETE CASCADE
);