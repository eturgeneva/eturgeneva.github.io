-- Step 1
SELECT * FROM customers
LIMIT 10;

SELECT * FROM orders
LIMIT 10;

SELECT * FROM books
LIMIT 10;

-- Step 2
SELECT *
FROM pg_indexes
WHERE tablename = 'customers'
OR tablename = 'orders'
OR tablename = 'books';

-- Indexes ideas customers:
-- first_name, last_name, email_address

-- Indexes ideas orders:
-- customer_id (foreign key reference)
-- quantity, order_date, ship_date

-- Indexes ideas books:
-- book_id (foreign key reference)
-- title, author

-- Step 3
CREATE INDEX orders_customer_id_idx ON orders (customer_id);
CREATE INDEX orders_book_id_idx ON orders (book_id);

SELECT * FROM pg_indexes
WHERE tablename = 'orders';

-- Step 4
EXPLAIN ANALYZE
SELECT original_language, title, sales_in_millions
FROM books
WHERE original_language = 'French';

-- Step 5
SELECT pg_size_pretty (pg_total_relation_size('books'));

-- Step 6
-- before creating an index:
SELECT pg_size_pretty (pg_total_relation_size('books'));

EXPLAIN ANALYZE
SELECT original_language, title, sales_in_millions
FROM books;

CREATE INDEX books_original_language_title_sales_in_millions_idx
ON books (original_language, title, sales_in_millions);

-- Step 7
-- after creating an index
SELECT pg_size_pretty (pg_total_relation_size('books'));

EXPLAIN ANALYZE
SELECT original_language, title, sales_in_millions
FROM books;

-- Step 8
DROP INDEX books_original_language_title_sales_in_millions_idx;

-- Step 9
DROP INDEX orders_customer_id_idx;
DROP INDEX orders_book_id_idx;

SELECT NOW();

\COPY orders FROM 'orders_add.txt' DELIMITER ',' CSV HEADER;

SELECT NOW();

-- Step 10
-- Step 11
EXPLAIN ANALYZE
SELECT email_address, first_name
FROM customers;

CREATE INDEX customers_email_address_first_name_idx
ON customers (email_address, first_name);

EXPLAIN ANALYZE
SELECT email_address, first_name
FROM customers;

DROP INDEX customers_email_address_first_name_idx;

-- first_name first:
EXPLAIN ANALYZE
SELECT first_name, email_address
FROM customers;

CREATE INDEX customers_first_name_email_address_idx
ON customers (first_name, email_address);

EXPLAIN ANALYZE
SELECT email_address, first_name
FROM customers;





