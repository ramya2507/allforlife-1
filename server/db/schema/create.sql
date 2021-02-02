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




