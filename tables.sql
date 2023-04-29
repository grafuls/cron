CREATE TABLE tomato_prices (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
