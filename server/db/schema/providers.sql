DROP TABLE IF EXISTS providers CASCADE;

CREATE TABLE providers(
    id SERIAL PRIMARY KEY NOT NULL,
    prefix VARCHAR(10),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    degree VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    description TEXT,
    license VARCHAR(255) NOT NULL,
    certificate FILE,
    language VARCHAR(255),
    ethnicity VARCHAR(255),
    faith VARCHAR(255),
    country VARCHAR(255),
    professional_expertise VARCHAR(255)
);