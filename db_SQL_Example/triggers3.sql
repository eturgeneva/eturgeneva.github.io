SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

-- Step 2 - trigger for updates of first_name and last_name only
CREATE TRIGGER customers_update
AFTER UPDATE ON customers
FOR EACH ROW
WHEN (NEW.first_name != OLD.first_name OR NEW.last_name != OLD.last_name)
EXECUTE PROCEDURE log_customers_change();

-- Step 3 - test, should trigger changelog
UPDATE customers
SET first_name = 'Eddie'
WHERE customer_id = 1;

-- Test - shouldn't trigger changelog
UPDATE customers
SET city = 'NewCity'
WHERE customer_id = 1;

SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

-- Step 5 - trigger for bulk insert
CREATE TRIGGER customer_insert
AFTER INSERT ON customers
FOR EACH STATEMENT
EXECUTE PROCEDURE log_customers_change();

-- Test
-- INSERT INTO customers (first_name, last_name, city)
-- VALUES ('Elena', 'Kotova', 'Cat City');

-- INSERT INTO customers (first_name, last_name, city)
-- VALUES ('Evgeny', 'Kotov', 'Cat City');

-- Step 6
INSERT INTO customers (first_name, last_name, city)
VALUES ('Evgeny', 'Kotov', 'Cat City'),
      ('Elena', 'Kotova', 'Cat City'),
      ('Kot', 'Kotov', 'Cat City');

SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

-- Step 7
CREATE TRIGGER customer_min_age
BEFORE UPDATE ON customers
FOR EACH ROW
WHEN (NEW.years_old < 13)
EXECUTE PROCEDURE override_with_min_age();

-- Step 8
UPDATE customers
SET years_old = 10
WHERE customer_id = 1;

UPDATE customers
SET years_old = 18
WHERE customer_id = 3;

SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

-- Step 9
UPDATE customers
SET first_name = 'Kotik',
  years_old = 15
WHERE customer_id = 6;

SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;

-- Step 10
SELECT * FROM information_schema.triggers;
DROP TRIGGER customer_min_age ON customers;

-- Step 11
SELECT * FROM information_schema.triggers;













