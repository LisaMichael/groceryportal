require("dotenv").config();
module.exports={
  "development": {
    "username": "root",
    "password": "joe4hire",
    "database": "grocery_db",
    "host": "127.0.0.1",
    "port":3306,
    "dialect": "mysql"
    
  },
  "test": {
    "username": "root",
    "password": "joe4hire",
    "database": "grocery_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
    
  },
  "production": {
    "username": "root",
    "password": "joe4hire",
    "database": "grocery_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
    
  }
}