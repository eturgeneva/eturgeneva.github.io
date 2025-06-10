-- Step 1
SELECT pg_size_pretty(
  pg_total_relation_size('sensors.observations')
);

-- Step 2
SELECT pg_size_pretty(
  pg_indexes_size('sensors.observations')
);

SELECT pg_size_pretty(
  pg_total_relation_size('sensors.observations_pkey')
) as observations_pkey_idx,
pg_size_pretty(
  pg_total_relation_size('sensors.observations_location_id_datetime_idx')
) as observations_location_id_datetime_idx;

-- Step 3
SELECT pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size,
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

-- Step 4
UPDATE sensors.observations
SET distance = (distance * 3.281)
WHERE true;

-- Step 5
SELECT pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size,
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

-- Step 6
VACUUM sensors.observations;

SELECT pg_size_pretty(
  pg_table_size('sensors.observations')
) as tbl_size;

-- Step 7
\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

-- Step 8
SELECT pg_size_pretty(
  pg_table_size('sensors.observations')
) as tbl_size;

-- Step 9
VACUUM FULL sensors.observations;

SELECT pg_size_pretty(
  pg_table_size('sensors.observations')
) as tbl_size;

-- Step 10
DELETE FROM sensors.observations
WHERE location_id > 24;

-- Step 11
SELECT pg_size_pretty(
  pg_table_size('sensors.observations')
) as tbl_size;

-- Step 12
TRUNCATE sensors.observations;

-- Step 13
\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './original_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

-- Step 14
SELECT pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size,
  pg_size_pretty(pg_indexes_size('sensors.observations')) as idx_size,
  pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;
