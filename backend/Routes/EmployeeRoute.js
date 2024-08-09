import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/employee_login", (req, res) => {
  // console.log(req.body)
  const sql = "SELECT * FROM `employee` WHERE `email` = ?";
  con.query(sql, [req.body.email], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      bcrypt.compare(req.body.password, result[0].password, (err, response) => {
        if (err)
          return res.json({ loginStatus: false, Error: "Wrong Password" });
        if (response) {
          const email = result[0].email;
          const token = jwt.sign(
            { role: "employee", email: email, id: result[0].id },
            "jwt_secret_key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          return res.json({ loginStatus: true, id: result[0].id });
        }
      });
    } else {
      return res.json({ loginStatus: false, Error: "Wrong email or password" });
    }
  });
});

router.get('/detail/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employee WHERE id = ?"
  con.query(sql, [id], (err, result) => {
    if(err) return res.json({Status: false});
    return res.json(result)
    
  })
})

router.get("/type_of_leave", (req, res) => {
  const sql = "SELECT * FROM `tbl_leave_type`";

  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/insert-leave/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    `INSERT INTO tbl_leave_info (empId, fromDate, toDate, leaveTypeId, leaveInfo, adminId) VALUES (?, ?, ?, ?, ?, ?)`;

    const {fromDate, toDate, type, leaveInfo, adminId} = req.body;
  
    con.query(sql, [id, fromDate, toDate, type, leaveInfo, adminId], (err, result)=>{
        if (err) return res.json({ Status: false, Error: err });
        return res.json({ Status: true });
    })
  });

  router.get("/get-leave-details/:id", (req, res) => {
    const id = req.params.id;
    const sql =
      `SELECT info.id, info.fromDate, info.toDate, info.leaveInfo, type.type, status.status FROM tbl_leave_info AS info INNER JOIN tbl_leave_type AS type ON 
    type.leaveId = info.leaveTypeId INNER JOIN tbl_leave_status AS status ON info.statusId = status.statusId WHERE info.empId = ?`;
    
      con.query(sql, [id], (err, result)=>{
        console.log(err);
        if(err) return res.json({Status: false, Error: "Query Error"+err})
          return res.json({Status: true, Result: result})
      })
    });

router.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({Status: true})
})

export { router as EmployeeRouter };