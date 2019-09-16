CREATE TABLE employee (
  emp_id INT IDENTITY(1,1) PRIMARY KEY,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  pos_id INT DEFAULT NULL,
  sub_id INT DEFAULT NULL,
  is_deleted BIT DEFAULT 0,
  created_at DATETIME2(0) DEFAULT GETDATE(),
  updated_at DATETIME2(0) DEFAULT GETDATE() 
);

CREATE TABLE sub (
  sub_id INT IDENTITY(1,1) PRIMARY KEY,
  shorthand VARCHAR(25) NOT NULL,
  location VARCHAR(25) NOT NULL,
  title VARCHAR(100) NOT NULL,
  is_deleted BIT DEFAULT 0,
  created_at DATETIME2(0) DEFAULT GETDATE(),
  updated_at DATETIME2(0) DEFAULT GETDATE() 
);

CREATE TABLE pos (
  pos_id INT IDENTITY(1,1) PRIMARY KEY,
  shorthand VARCHAR(25) DEFAULT NULL,
  title VARCHAR(100) NOT NULL,
  is_deleted BIT DEFAULT 0,
  created_at DATETIME2(0) DEFAULT GETDATE(),
  updated_at DATETIME2(0) DEFAULT GETDATE() 
);

CREATE TABLE task (
  task_id INT IDENTITY(1,1) PRIMARY KEY,
  shorthand VARCHAR(25) DEFAULT NULL,
  title VARCHAR(100) NOT NULL,
  is_deleted BIT DEFAULT 0,
  created_at DATETIME2(0) DEFAULT GETDATE(),
  updated_at DATETIME2(0) DEFAULT GETDATE() 
);

CREATE TABLE service (
  service_id INT IDENTITY(1,1) PRIMARY KEY,
  shorthand VARCHAR(25) DEFAULT NULL,
  title VARCHAR(100) NOT NULL,
  is_deleted BIT DEFAULT 0,
  created_at DATETIME2(0) DEFAULT GETDATE(),
  updated_at DATETIME2(0) DEFAULT GETDATE() 
);