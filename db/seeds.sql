INSERT INTO departments (names)
VALUES 
('warehouse'),
('office');

INSERT INTO roles (title, salary, department_id)
VALUES
('warehouse manager', 60000.00, 1),
('office manager', 60000.00,2),
('office assistant', 45000.00, 2),
('warehouse partner', 45000.00, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
-- this is the warehouse manager
('Tom', 'Truman', 1, NULL),
-- this is the office manager
('Jane', 'Jacobs', 2, NULL),
-- this is the office employee/assistant 
('Brad', 'Brady', 3, 2),
-- this is the warehouse employee/partner
('Samantha', 'Stahlings', 4, 1);

