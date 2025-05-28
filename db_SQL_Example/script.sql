CREATE TABLE restaurant (
  id integer PRIMARY KEY,
  name varchar(20),
  description varchar(100),
  rating decimal,
  telephone char(10),
  hours varchar(100)
);

-- one-to-one with restaurant
CREATE TABLE address (
  id integer PRIMARY KEY,
  street_number varchar(10),
  street_name varchar(20),
  city varchar(20),
  state varchar(15),
  google_map_link varchar(50),
  restaurant_id integer REFERENCES restaurant(id) UNIQUE
);

-- Step 2
SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'restaurant';

SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'address';

-- Step 3 - Category
CREATE TABLE category (
 id char(2) PRIMARY KEY,
 name varchar(20),
 description varchar(200)
);

SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'category';

-- Step 4 - Dishes inside a category
CREATE TABLE dish (
  id integer PRIMARY KEY,
  name varchar(50),
  description varchar(200),
  hot_and_spicy boolean
);

SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'dish';

-- Step 5 - Review (one-to-many with the restaurant)
CREATE TABLE review (
  id integer PRIMARY KEY,
  rating decimal,
  description varchar(100),
  date date,
  restaurant_id integer REFERENCES restaurant(id)
);

SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'review';

-- Step 6 One-to-one between restaurant & address
SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'address';

-- Step 7 One-to-many between restaurant & reviews
SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'review';

-- Step 8 Many-to-many between category & dish
-- A cross-reference table
CREATE TABLE categories_dishes (
  category_id char(2) REFERENCES category(id),
  dish_id integer REFERENCES dish(id),
  PRIMARY KEY(dish_id, category_id),
  price money
);

-- Step 9
/* 
 *--------------------------------------------
 Insert values for restaurant
 *--------------------------------------------
 */
INSERT INTO restaurant VALUES (
  1,
  'Bytes of China',
  'Delectable Chinese Cuisine',
  3.9,
  '6175551212',
  'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm'
);

/* 
 *--------------------------------------------
 Insert values for address
 *--------------------------------------------
 */
INSERT INTO address VALUES (
  1,
  '2020',
  'Busy Street',
  'Chinatown',
  'MA',
  'http://bit.ly/BytesOfChina',
  1
);

/* 
 *--------------------------------------------
 Insert values for review
 *--------------------------------------------
 */
INSERT INTO review VALUES (
  1,
  5.0,
  'Would love to host another birthday party at Bytes of China!',
  '05-22-2020',
  1
);

INSERT INTO review VALUES (
  2,
  4.5,
  'Other than a small mix-up, I would give it a 5.0!',
  '04-01-2020',
  1
);

INSERT INTO review VALUES (
  3,
  3.9,
  'A reasonable place to eat for lunch, if you are in a rush!',
  '03-15-2020',
  1
);

/* 
 *--------------------------------------------
 Insert values for category
 *--------------------------------------------
 */
INSERT INTO category VALUES (
  'C',
  'Chicken',
  null
);

INSERT INTO category VALUES (
  'LS',
  'Luncheon Specials',
  'Served with Hot and Sour Soup or Egg Drop Soup and Fried or Steamed Rice  between 11:00 am and 3:00 pm from Monday to Friday.'
);

INSERT INTO category VALUES (
  'HS',
  'House Specials',
  null
);

/* 
 *--------------------------------------------
 Insert values for dish
 *--------------------------------------------
 */
INSERT INTO dish VALUES (
  1,
  'Chicken with Broccoli',
  'Diced chicken stir-fried with succulent broccoli florets',
  false
);

INSERT INTO dish VALUES (
  2,
  'Sweet and Sour Chicken',
  'Marinated chicken with tangy sweet and sour sauce together with pineapples and green peppers',
  false
);

INSERT INTO dish VALUES (
  3,
  'Chicken Wings',
  'Finger-licking mouth-watering entree to spice up any lunch or dinner',
  true
);

INSERT INTO dish VALUES (
  4,
  'Beef with Garlic Sauce',
  'Sliced beef steak marinated in garlic sauce for that tangy flavor',
  true
);

INSERT INTO dish VALUES (
  5,
  'Fresh Mushroom with Snow Peapods and Baby Corns',
  'Colorful entree perfect for vegetarians and mushroom lovers',
  false
);

INSERT INTO dish VALUES (
  6,
  'Sesame Chicken',
  'Crispy chunks of chicken flavored with savory sesame sauce',
  false
);

INSERT INTO dish VALUES (
  7,
  'Special Minced Chicken',
  'Marinated chicken breast sauteed with colorful vegetables topped with pine nuts and shredded lettuce.',
  false
);

INSERT INTO dish VALUES (
  8,
  'Hunan Special Half & Half',
  'Shredded beef in Peking sauce and shredded chicken in garlic sauce',
  true
);

/*
 *--------------------------------------------
 Insert valus for cross-reference table, categories_dishes
 *--------------------------------------------
 */
INSERT INTO categories_dishes VALUES (
  'C',
  1,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'C',
  3,
  6.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  1,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  4,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'LS',
  5,
  8.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  6,
  15.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  7,
  16.95
);

INSERT INTO categories_dishes VALUES (
  'HS',
  8,
  17.95
);

-- Step 10
SELECT restaurant.name,
  restaurant.telephone,
  address.state,
  address.city,
  address.street_name,
  address.street_number
FROM restaurant
JOIN address
  ON restaurant.id = address.restaurant_id;

-- Step 11
-- SELECT restaurant.name,
--   review.rating AS best_rating
-- FROM restaurant
-- JOIN review
--   ON restaurant.id = review.restaurant_id
-- ORDER BY review.rating DESC
-- LIMIT 1;

SELECT restaurant.name,
  MAX(review.rating) AS best_rating
FROM restaurant
JOIN review
  ON restaurant.id = review.restaurant_id
GROUP BY 1;

-- Step 12 Display a dish name, its price and category sorted by the dish name
SELECT dish.name AS dish_name,
  category.name AS category,
  categories_dishes.price
FROM dish
JOIN categories_dishes
  ON dish.id = categories_dishes.dish_id
JOIN category
  ON categories_dishes.category_id = category.id
ORDER BY dish.name ASC;

-- Step 13 Same as 12, but sorted by category name
SELECT category.name AS category,
  dish.name AS dish_name,
  categories_dishes.price
FROM dish
JOIN categories_dishes
  ON dish.id = categories_dishes.dish_id
JOIN category
  ON categories_dishes.category_id = category.id
ORDER BY category.name ASC;

-- Step 14 Display all the spicy dishes, their prices and category
SELECT dish.name AS spicy_dish_name,
  category.name AS category,
  categories_dishes.price
FROM dish
JOIN categories_dishes
  ON dish.id = categories_dishes.dish_id
JOIN category
  ON categories_dishes.category_id = category.id
WHERE hot_and_spicy;

-- Step 15
SELECT dish_id,
  COUNT(dish_id) AS dish_count
FROM categories_dishes
GROUP BY 1;

-- Step 16 Display only the dish(es) from the categories_dishes table which appears more than once. 
SELECT dish_id,
  COUNT(dish_id) AS dish_count
FROM categories_dishes
GROUP BY 1
HAVING COUNT(dish_id) > 1;

-- Step 17 Write a better query which tells us exactly the name(s) of the dish that appears more than once in the categories_dishes table
SELECT dish_id,
  dish.name AS dish_name,
  COUNT(dish_id) AS dish_count
FROM categories_dishes
JOIN dish
  ON categories_dishes.dish_id = dish.id
GROUP BY 1, 2
HAVING COUNT(dish_id) > 1;

-- Step 18 Write a query that displays the best rating as best_rating and the description too
SELECT restaurant.name,
  review.description,
  MAX(review.rating) AS best_rating
FROM restaurant
JOIN review
  ON restaurant.id = review.restaurant_id
GROUP BY 1, 2
ORDER BY MAX(review.rating) DESC
LIMIT 1;

SELECT restaurant.name,
  review.description,
  MAX(review.rating) AS best_rating
FROM restaurant
JOIN review
  ON restaurant.id = review.restaurant_id
WHERE review.rating = ( SELECT MAX(review.rating) from review)
GROUP BY 1, 2;





