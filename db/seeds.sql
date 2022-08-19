INSERT INTO department
    (department_name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO roles
    (title, department_name, salary, department_id)

VALUES
    ('Systems Engineer', 'Engineering', 160000, 1),
    ('Software Engineer', 'Engineering', 150000, 1),
    ('Project Manager', 'Finance', 160000, 2),
    ('Accountant', 'Finance', 120000, 2),
    ('Lawyer', 'Legal', 180000, 3),
    ('Legal Assistant', 'Legal', 100000, 3),
    ('Sales Assistant', 'Sales', 110000, 4),
    ('Salesman', 'Sales', 146000, 4);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)

VALUES 
    ('James', 'Fraser', 1, 1),
    ('Jack', 'London', 1, 1),
    ('Robert', 'Bruce', 1, 1),
    ('Peter', 'Greenaway', 2, 2),
    ('Derek', 'Jarman', 2, 2),
    ('Paolo', 'Pasolini', 2, 2),
    ('Heathcote', 'Williams', 3, 3),
    ('Sandy', 'Powell', 3, 3),
    ('Emil', 'Zola', 3, 3),
    ('Sissy', 'Coalpits', 4, 4),
    ('Antoinette', 'Capet', 4, 4),
    ('Samuel', 'Delany', 4, 4),
    ('Tony', 'Duvert', 5, 5),
    ('Dennis', 'Cooper', 5, 5),
    ('Monica', 'Bellucci', 5, 5),
    ('Samuel', 'Johnson', 6, 6),
    ('John', 'Dryden', 6, 6);



