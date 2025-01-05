SELECT DISTINCT c.first_name, c.last_name
FROM test_drives t
JOIN customers c ON t.customer_id = c.customer_id;

DELETE FROM cars WHERE car_id = 1;

DELETE FROM cars WHERE car_id = 1;

SELECT c.make, c.model, m.record
FROM cars c
JOIN maintenances m ON c.car_id = m.car_id
ORDER BY c.make, c.model;

SELECT c.make, c.model, m.record
FROM cars c
JOIN maintenances m ON c.car_id = m.car_id;

SELECT * FROM customers;

SELECT c.first_name, c.last_name, t.feedback
FROM test_drives t
JOIN customers c ON t.customer_id = c.customer_id
WHERE t.car_id = 1;

SELECT s.sale_id, c.first_name AS customer_name, e.first_name AS employee_name, s.sale_date, s.final_price
FROM sales s
JOIN customers c ON s.customer_id = c.customer_id
JOIN employees e ON s.employee_id = e.employee_id
WHERE s.sale_id = 1;

SELECT s.sale_id, c.first_name AS customer_name, e.first_name AS employee_name, s.sale_date, s.final_price
FROM sales s
JOIN customers c ON s.customer_id = c.customer_id
JOIN employees e ON s.employee_id = e.employee_id
WHERE s.sale_id = 1;

SELECT * FROM cars WHERE status = 'available';

SELECT e.first_name, e.last_name, COUNT(s.sale_id) AS total_sales
FROM sales s
JOIN employees e ON s.employee_id = e.employee_id
GROUP BY e.employee_id;

SELECT e.first_name, e.last_name, COUNT(s.sale_id) AS total_sales, SUM(s.final_price) AS total_revenue
FROM sales s
JOIN employees e ON s.employee_id = e.employee_id
WHERE s.sale_date BETWEEN '2024-11-01' AND '2024-11-30'
GROUP BY e.employee_id;

UPDATE customers
SET address = 'example address'
WHERE customer_id = 1;

UPDATE sales
SET final_price = 23000.00
WHERE sale_id = 1;

UPDATE cars
SET status = 'sold'
WHERE car_id = 1;