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

CREATE TABLE IF NOT EXISTS normalas (
  pos_id INT,
  type_id INT,
  PRIMARY KEY (pos_id, type_id),
  FOREIGN KEY (pos_id) REFERENCES pos(pos_id),
  FOREIGN KEY (type_id) REFERENCES service_type(type_id)
);

CREATE TABLE IF NOT EXISTS super_scope (
  superscope_id INT AUTO_INCREMENT PRIMARY KEY,
  superscope VARCHAR(255) NOT NULL
);
INSERT INTO super_scope (superscope) VALUES ("Local"), ("Inter-Island"), ("International");

CREATE TABLE IF NOT EXISTS dep_scope (
  depscope_id INT AUTO_INCREMENT PRIMARY KEY,
  depscope VARCHAR(255) NOT NULL
);
INSERT INTO dep_scope (depscope) VALUES ("Within S&I"), ("Other Department"), ("Outside Bank");

CREATE TABLE IF NOT EXISTS service_scope (
  superscope_id INT,
  depscope_id INT,
  PRIMARY KEY (superscope_id, depscope_id),
  FOREIGN KEY (superscope_id) REFERENCES super_scope(superscope_id),
  FOREIGN KEY (depscope_id) REFERENCES dep_scope(depscope_id)
);

CREATE TABLE IF NOT EXISTS service (
  service_id INT AUTO_INCREMENT PRIMARY KEY,
  arch_id INT,
  type_id INT,
  depscope_id INT,
  superscope_id INT,
  is_deleted BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (arch_id) REFERENCES service_archtype(arch_id),
  FOREIGN KEY (type_id) REFERENCES service_type(type_id),
  FOREIGN KEY (depscope_id) REFERENCES dep_scope(depscope_id),
  FOREIGN KEY (superscope_id) REFERENCES super_scope(superscope_id)
);

  footprint INT,
  cm_year YEAR,
  cm_seq INT,
  explanation VARCHAR(255),