DROP TABLE IF EXISTS customers CASCADE;

CREATE TABLE customers(
    id SERIAL PRIMARY KEY NOT NULL,
    prefix VARCHAR(10),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS providers CASCADE;

CREATE TABLE providers(
    id SERIAL PRIMARY KEY NOT NULL,
    prefix VARCHAR(10),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    degree VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS job_postings CASCADE;

CREATE TABLE job_postings(
    id SERIAL PRIMARY KEY NOT NULL,
    customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
    appointmentFor VARCHAR(255),
    description TEXT,
    therapy VARCHAR(255),
    sexuality VARCHAR(255),
    age VARCHAR(255),
    language VARCHAR(255),
    ethnicity VARCHAR(255),
    faith VARCHAR(255),
    typeOfPayment VARCHAR(255),
    maxPrice INTEGER,
    minPrice INTEGER,
    appointmentFrequency VARCHAR(255),
    timeRequirement VARCHAR(255),
    availabilityFrom VARCHAR(255),
    availabilityTo VARCHAR(255),
    postCreationTime CURRENT_TIMESTAMP(2);
)

DROP TABLE IF EXISTS symptomes CASCADE;

CREATE TABLE symptomes(
    id SERIAL PRIMARY KEY NOT NULL,
    job_posting_id INTEGER REFERENCES job_postings(id) ON DELETE CASCADE,
    name VARCHAR(255)
)

DROP TABLE IF EXISTS symptomes_look_up CASCADE;

CREATE TABLE symptomes_look_up(
    id SERIAL PRIMARY KEY NOT NULL,
    job_posting_id INTEGER REFERENCES job_postings(id) ON DELETE CASCADE,
    symptome_id INTEGER REFERENCES symptomes(id) ON DELETE CASCADE
)
