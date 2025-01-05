INSERT INTO cars (car_id, make, model, year, price, status, VIN_number)
VALUES
("111", "Volkswagen", "Polo", "2005", "2000", "available", "1GNEK13ZX3R298984"),
("112", "Vauxhall", "Corsa", "2010", "16000", "sold", "1CNEK13ZX3R298972"),
("113", "Volvo", "XC60", "2016", "38000", "available", "1MGEK13ZX3R298917"),
("114",'Toyota', 'Corolla', 2022, 25000.00, 'available', '1HGBH41JXMN109186');

INSERT INTO customers (customer_id, first_name, last_name, email, phone_number, address)
VALUES 
("221", 'Juan', 'Cur', 'Juan.curr@cplbusiness.com', '07513493003', '123 bedrock drive'),
("222", "Johnny", "Lennon", "john.lennon@gmail.com", "7846283927", "44 London road, Guildford, GU1 2BJ"),
("223", "Ben ", "Harrison", "ben.harrison@outlook.co.uk", "7845428345", "44 Beech road, Birmingham, BU12 8NN"),
("224", "Liam", "Richardson", "liam.richardson@bt.com", "7846283268", "12 Fernhill court, Reading, RG1 8MB");

INSERT INTO dealerships (location_id, location_name, address, phone_number)
VALUE
("301", "Aldershot", "Bakers Corner, Aldershot GU12 4DZ", "7836785262"),
("302", "Guildford", "14-16 Moorfield Rd, Guildford GU1 1RU", "7836785721"),
("303", "Tadley", " Coopers Ln, Bramley, Tadley RG26 5BZ", "7836785372");

INSERT INTO employees (employee_id, location_id, first_name, last_name, email, phone_number, hire_date, position)
VALUES 
("501", "301", 'Dave', 'Smith', 'dave@discount.com', '0732857443', "2023-05-13", 'Sales');

INSERT INTO sales (car_id, customer_id, employee_id, sale_date, final_price)
VALUES 
(111, 221, 501, '2024-11-19', 25000.00);

INSERT INTO maintenances (car_id, record)
VALUES
 (111, 'oil change and tire rotation');

INSERT INTO test_drives (car_id, customer_id, feedback)
VALUES
 (111, 221,  'The car was smooth to drive');