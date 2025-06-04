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
OR tablename = 'books'
OR tablename = 'orders';

-- Step 3
EXPLAIN ANALYZE SELECT
FROM orders
WHERE quantity > 18;

-- Step 4
CREATE INDEX orders_quantity_min18_ordered_idx
ON orders (quantity)
WHERE quantity > 18;

-- Step 5
EXPLAIN ANALYZE SELECT
FROM orders
WHERE quantity > 18;

-- Step 6
EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id < 200;

ALTER TABLE customers
ADD PRIMARY KEY(customer_id);

SELECT *
FROM pg_indexes
WHERE tablename = 'customers';

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id < 200;

-- Step 7
CLUSTER customers USING customers_pkey;

SELECT * FROM customers
LIMIT 10;

-- Step 8
CREATE INDEX orders_customer_id_book_id_idx
ON orders (customer_id, book_id);

-- Step 9
DROP INDEX orders_customer_id_book_id_idx;

EXPLAIN ANALYZE SELECT customer_id, book_id
FROM orders;

CREATE INDEX orders_customer_id_book_id_quantity_idx
ON orders (customer_id, book_id, quantity);

EXPLAIN ANALYZE SELECT customer_id, book_id
FROM orders;

-- Step 10
CREATE INDEX books_author_title_idx
ON books (author, title);

-- Step 11
EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;

-- Step 12
CREATE INDEX orders_total_price_idx
ON orders ((quantity * price_base));

SELECT *
FROM pg_indexes
WHERE tablename = 'orders';

-- Step 13
EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base > 100;

-- Step 14
SELECT *
FROM pg_indexes
WHERE tablename = 'orders'
OR tablename = 'books'
OR tablename = 'customers';