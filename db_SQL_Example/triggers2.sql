SELECT * FROM customers
ORDER BY customer_id;

-- Trigger 1 inserts a new record into the customer table with a very generic first/last name.
-- CREATE TRIGGER trigger_1
-- BEFORE UPDATE ON customers
-- FOR EACH STATEMENT
-- EXECUTE PROCEDURE function_1();

-- Trigger 2 sets first name of the row modified to hidden
-- CREATE TRIGGER trigger_2
-- BEFORE UPDATE ON customers
-- FOR EACH ROW
-- EXECUTE PROCEDURE function_2();

-- Trigger 3 logs the user that made a change to the table in the customers_log table
-- CREATE TRIGGER trigger_3
-- BEFORE UPDATE ON customers
-- FOR EACH ROW
-- EXECUTE PROCEDURE function_3();

CREATE TRIGGER trigger_3
BEFORE INSERT ON customers
FOR EACH ROW
EXECUTE PROCEDURE function_3();

UPDATE customers
SET city = 'Sin City'
WHERE last_name = 'Hall';

INSERT INTO customers (first_name, last_name, email_address, home_phone, city, state_name, years_old)
VALUES ('Elena', 'Kotova', 'elena@mail.com', '000-000-0000', 'Awesomecity', 'Awesomestate', 15);

SELECT * FROM customers
ORDER BY customer_id;

SELECT * FROM customers_log;