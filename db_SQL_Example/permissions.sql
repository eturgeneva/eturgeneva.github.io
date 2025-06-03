-- Step 1
SELECT rolname
FROM pg_catalog.pg_roles
WHERE rolsuper = 't';

-- Step 2
SELECT *
FROM pg_catalog.pg_roles;

-- Step 3
SELECT CURRENT_USER;
SELECT current_role;

-- Step 4
CREATE ROLE abc_open_data 
WITH LOGIN NOSUPERUSER;

-- Step 5
CREATE ROLE publishers
WITH NOSUPERUSER
ROLE abc_open_data;

-- Step 6
GRANT USAGE ON SCHEMA analytics
TO publishers;

-- Step 7
GRANT SELECT ON ALL TABLES IN SCHEMA analytics
TO publishers;

-- Step 8
SELECT *
FROM information_schema.table_privileges
WHERE grantee = 'abc_open_data'
OR grantee = 'publishers';

-- SELECT *
-- FROM information_schema.table_privileges
-- WHERE privilege_type = 'SELECT'
-- AND grantee != 'ccuser';

-- Step 9
SET ROLE abc_open_data;
SELECT * FROM analytics.downloads limit 10;
SET ROLE ccuser;

-- Step 10
SELECT *
FROM directory.datasets
LIMIT 5;

-- Step 11
GRANT USAGE ON SCHEMA directory
TO publishers;

-- Step 12
GRANT SELECT (id, create_date, hosting_path, publisher, src_size)
ON directory.datasets
TO publishers;

-- Step 13
SET ROLE abc_open_data;

SELECT id, publisher, hosting_path
FROM directory.datasets;

SET ROLE ccuser;

-- Step 14
CREATE POLICY select_abc_policy ON analytics.datasets
FOR SELECT
TO publishers USING (publisher = current_user);
ALTER TABLE directory.datasets ENABLE ROW LEVEL SECURITY;

-- Step 15
SELECT *
FROM directory.datasets
LIMIT 5;

SET ROLE abc_open_data;

SELECT *
FROM directory.datasets
LIMIT 5;