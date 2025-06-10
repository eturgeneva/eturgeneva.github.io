-- Step 1
SELECT * FROM store
LIMIT 10;

-- Step 2
SELECT COUNT(DISTINCT(order_id))
FROM store;

SELECT COUNT(DISTINCT(customer_id))
FROM store;

-- Step 3
SELECT customer_id, customer_email, customer_phone
FROM store
WHERE customer_id = 1;

-- Step 4
SELECT item_1_id,
  item_1_name,
  item_1_price
FROM store
WHERE item_1_id = 4;

-- Step 5
CREATE TABLE customers AS
SELECT DISTINCT customer_id, customer_phone, customer_email
FROM store;

-- Step 6
ALTER TABLE customers
ADD PRIMARY KEY (customer_id);

-- Step 7
CREATE TABLE items AS
SELECT DISTINCT item_1_id as item_id,
  item_1_name as item_name,
  item_1_price as item_price
FROM store
UNION
SELECT DISTINCT item_2_id as item_id,
  item_2_name as item_name,
  item_2_price as item_price
FROM store
WHERE item_2_id IS NOT NULL
UNION
SELECT DISTINCT item_3_id as item_id,
  item_3_name as item_name,
  item_3_price as item_price
FROM store
WHERE item_3_id IS NOT NULL;

-- Step 8
ALTER TABLE items
ADD PRIMARY KEY (item_id);

-- Step 9
CREATE TABLE orders_items AS
SELECT order_id,
  item_1_id as item_id
FROM store
UNION ALL
SELECT order_id,
  item_2_id as item_id
FROM store
UNION ALL
SELECT order_id,
  item_3_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
  AND item_3_id IS NOT NULL;

SELECT * FROM orders_items
LIMIT 10;

-- Step 10
CREATE TABLE orders AS
SELECT order_id,
  order_date,
  customer_id
FROM store;

-- Step 11
ALTER TABLE orders
ADD PRIMARY KEY (order_id);

-- Step 12
ALTER TABLE orders
ADD FOREIGN KEY (customer_id)
REFERENCES customers (customer_id);

-- Step 13
ALTER TABLE orders_items
ADD FOREIGN KEY (order_id)
REFERENCES orders (order_id);

-- Step 14
-- return the emails of all customers who made an order after July 25, 2019 from the original store db
SELECT customer_email
FROM store
WHERE order_date > '2019-07-25'
ORDER BY 1 ASC
LIMIT 10;

-- Step 15
-- return the emails of all customers who made an order after July 25, 2019 from the new normalized db
SELECT customer_email
FROM customers
JOIN orders
  ON customers.customer_id = orders.customer_id
WHERE orders.order_date > '2019-07-25'
ORDER BY 1 ASC
LIMIT 10;

-- Step 16
-- return the number of orders containing each unique item (for example, two orders contain item 1, two orders contain item 2, four orders contain item 3, etc.)
WITH all_items AS (
SELECT item_1_id as item_id
FROM store
UNION ALL
SELECT item_2_id as item_id
FROM store
WHERE item_2_id IS NOT NULL
UNION ALL
SELECT item_3_id as item_id
FROM store
WHERE item_3_id IS NOT NULL
)
SELECT item_id, COUNT(*)
FROM all_items
GROUP BY 1;

-- Step 17
-- return the number of orders containing each unique item
SELECT orders_items.item_id,
  COUNT(orders_items.order_id)
FROM orders_items
JOIN orders
  ON orders_items.order_id = orders.order_id
JOIN items
  ON orders_items.item_id = items.item_id
GROUP BY 1
ORDER BY 1 ASC
;

SELECT item_id, COUNT(order_id)
FROM orders_items
GROUP BY 1
ORDER BY 1 ASC;

-- Step 18
-- How many orders included a 'chair'?
SELECT COUNT(orders_items.order_id),
  items.item_name
FROM orders_items
JOIN items
  ON orders_items.item_id = items.item_id
WHERE item_name = 'chair'
GROUP BY 2;

-- How many customers made more than one order? What are their emails?
SELECT COUNT(orders.order_id) AS order_count,
  orders.customer_id
FROM customers
JOIN orders
  ON customers.customer_id = orders.customer_id
GROUP BY 2
HAVING COUNT(orders.order_id) > 1;

-- With emails
SELECT COUNT(orders.order_id) AS order_count,
  orders.customer_id,
  customers.customer_email
FROM customers
JOIN orders
  ON customers.customer_id = orders.customer_id
GROUP BY 2, 3
HAVING COUNT(orders.order_id) > 1;

-- How many customers made more than 1 order (total number)
WITH multiple_orders AS (
SELECT COUNT(orders.order_id) AS order_count,
  orders.customer_id
FROM customers
JOIN orders
  ON customers.customer_id = orders.customer_id
GROUP BY 2
HAVING COUNT(orders.order_id) > 1
)
SELECT COUNT(*)
FROM multiple_orders;

