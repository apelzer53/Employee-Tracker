INSERT INTO department (name) VALUES
('Kitchen'),
('Front of House'),
('Bar');

INSERT INTO role (title, salary, department_id) VALUES
('Head Chef', 80000, 1),  
('Sous Chef', 60000, 1),  
('Server', 40000, 2),  
('Hostess', 30000, 2),  
('Bartender', 45000, 3);  

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Gordon', 'Ramsey', 1, NULL),  
('Guy', 'Fieri', 2, 1),  
('Kim', 'Kardashian', 3, NULL),  
('Paris', 'Hilton', 4, 3),  
('Kevin', 'Hart', 5, NULL);
