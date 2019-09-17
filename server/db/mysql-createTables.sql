CREATE TABLE IF NOT EXISTS employee (
  emp_id INT AUTO_INCREMENT PRIMARY KEY,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  pos_id INT DEFAULT NULL,
  sub_id INT DEFAULT NULL,
  is_deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sub (
  sub_id INT AUTO_INCREMENT PRIMARY KEY,
  shorthand VARCHAR(25) NOT NULL,
  location VARCHAR(25) NOT NULL,
  title VARCHAR(100) NOT NULL,
  is_deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pos (
  pos_id INT AUTO_INCREMENT PRIMARY KEY,
  shorthand VARCHAR(25) DEFAULT NULL,
  title VARCHAR(100) NOT NULL,
  is_deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS service (
  service_id INT AUTO_INCREMENT PRIMARY KEY,
  shorthand VARCHAR(25) DEFAULT NULL,
  title VARCHAR(100) NOT NULL,
  is_deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS service_scope (
  scope_id INT AUTO_INCREMENT PRIMARY KEY,
  shorthand VARCHAR(25) DEFAULT NULL,
  scope VARCHAR(100) NOT NULL
);

INSERT INTO service_scope (shorthand, scope) 
VALUES 
	("IntraDL", "Intra-Department Local"),
	("IntraDS", "Intra-Department Subsidiary"),
  ("InterDL", "Inter-Department Local"),
  ("InterDS", "Inter-Department Subsidiary"),
  ("ExtL", "External Local"),
  ("ExtG", "External Global")
;

CREATE TABLE IF NOT EXISTS service_archtype (
  arch_id INT AUTO_INCREMENT PRIMARY KEY,
  shorthand VARCHAR(25) DEFAULT NULL,
  archtype VARCHAR(100) NOT NULL
);

INSERT INTO service_archtype (shorthand, archtype)
VALUES
  ("Lead", "Security Leadership"),
  ("Inv", "Investigations"),
  ("Equip", "Security Equipment"),
  ("Prot", "Asset Protection"),
  ("Exec", "Executive Protection")
;

CREATE TABLE IF NOT EXISTS service_type (
  type_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  arch_id INT,
  FOREIGN KEY (arch_id) REFERENCES service_archtype(arch_id)
);

INSERT INTO service_type (title, arch_id)
VALUES
  ("Management", 1),
  ("Supervision", 1),
  ("General Investigations", 2),
  ("Electronic Investigations", 2),
  ("Screening", 2),
  ("Inspection/Maintenance", 3),
  ("Purchasing/Installation", 3),
  ("Guarding", 4),
  ("Patrolling", 4),
  ("Roving", 4),
  ("Shadowing", 5),
  ("Transportation", 5),
  ("Domicile Protection", 5)
;
