INSERT INTO departments (name) 
VALUES  ("Corpret"),
        ("Marketing"),
        ("IT");

INSERT INTO roles (job_title, departmentID, salary)
VALUES  ("CEO", 1, 200000.00),
        ("Maketing Manager", 2, 50000.00),
        ("IT Manager", 3, 100000.00),
        ("COE Asistent", 1, 25000.00),
        ("Marketing Secratery", 2, 15000.50),
        ("Jr IT", 3, 75370.95);

INSERT INTO employees (first_name, last_name, roleID, manager) 
VALUES  ("Jett", "Crowther", 1, ""),
        ("Bob", "Ey", 2, "Jett"),
        ("Dave", "Ed", 3, "Jett"),
        ("Jein", "Ey", 4, "Jett"),
        ("Mort", "Ey", 5, "Bob"),
        ("Ale", "En", 6, "Dave");