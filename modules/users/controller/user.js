import { DB } from "../../../DB/connection.js";

//==============================Q1=================================//
export const getUsers = (req, res) => {
  DB.execute(`select * from users`, (err, result, fields) => {
    if (err) {
      res.json({ message: "Query error", err });
    } else {
      res.json({ message: "Done", result });
    }
  });
};

//==============================Q2=================================//
export const addUser = (req, res) => {
  const { firstName, lastName, email, password, age } = req.body;
  DB.execute(
    `insert into users (firstName,lastName,email,password,age) values('${firstName}','${lastName}','${email}','${password}',${age})`,
    (err, result, fields) => {
      if (err) {
        if (
          err.sqlMessage == "Duplicate entry 'karem3@gmail.com' for key 'email'"
        ) {
          res.json({ message: "email is exist please enter another email" });
        } else {
          res.json({ message: "Query error", err });
        }
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
//==============================Q3=================================//
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  DB.execute(
    `update users set email='${email}' where id=${id}`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        if (result.affectedRows) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "Invalid user in system" });
        }
      }
    }
  );
};
//==============================Q4=================================//
export const deleteUser = (req, res) => {
  const { id } = req.params;
  DB.execute(`delete from users where id=${id}`, (err, result, fields) => {
    if (err) {
      res.json({ message: "Query error", err });
    } else {
      if (result.affectedRows) {
        res.json({ message: "Done", result });
      } else {
        res.json({ message: "Invalid user in system" });
      }
    }
  });
};
//==============================Q5=================================//
export const startWithKey = (req, res) => {
  const { key } = req.query;
  DB.execute(
    `select * from users where firstName like '${key}%'`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
//==============================Q6=================================//
export const endWithKey = (req, res) => {
  const { key } = req.query;
  DB.execute(
    `select * from users where firstName like '%${key}'`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        if (result.length > 0) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "don't have any users with this condition" });
        }
      }
    }
  );
};
//==============================Q7=================================//
export const getUser = (req, res) => {
  const { id } = req.params;
  DB.execute(`select * from users where id=${id}`, (err, result, fields) => {
    if (err) {
      res.json({ message: "Query error", err });
    } else {
      if (result.length == 1) {
        res.json({ message: "Done", result });
      } else {
        res.json({ message: "user doesn't exist" });
      }
    }
  });
};
//==============================Q8=================================//
export const userWithAgeCondition = (req, res) => {
  const { smallAge, largeAge } = req.body;
  DB.execute(
    `select * from users where age >=${smallAge} && age <=${largeAge}`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        if (result.length > 0) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "don't have any users with this condition" });
        }
      }
    }
  );
};
//==============================Q9=================================//
export const startWithAndAge = (req, res) => {
  const { key } = req.query;
  const { age } = req.body;
  DB.execute(
    `select * from users where age<${age} && firstName like '${key}%'`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        if (result.length > 0) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "don't have any users with this condition" });
        }
      }
    }
  );
};
//==============================Q10=================================//
export const getUserWithCondition = (req, res) => {
  const { key } = req.query;
  DB.execute(
    `select * from users where firstName like '${key}%' || lastName like '${key}%'`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        if (result.length > 0) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "don't have any users with this condition" });
        }
      }
    }
  );
};
//==============================Q11=================================//
export const seach = (req, res) => {
  const { fname, lname } = req.params;
  DB.execute(
    `select * from users where firstName='${fname}'&& lastName='${lname}'`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        if (result.length > 0) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "don't have any users with this condition" });
        }
      }
    }
  );
};
//==============================Q12=================================//
export const getUsersByIds = (req, res) => {
  const key = req.query;
  console.log(key.key);
  DB.execute(
    `select * from users where id in(${key.key})`,
    (err, result, fields) => {
      if (err) {
        res.json({ message: "Query error", err });
      } else {
        if (result.length > 0) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "don't have any users with this condition" });
        }
      }
    }
  );
};
