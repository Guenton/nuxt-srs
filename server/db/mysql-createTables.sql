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
  ("Inv", "Investigations"),
  ("Equip", "Security Equipment"),
  ("Prot", "Asset Protection")
;