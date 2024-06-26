import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";


const router = express.Router();

router.post("/adminlogin", (req, res) => {
  // console.log(req.body)

  const sql = "SELECT * FROM `admin` WHERE `email` = ? AND `password` = ?";

  const values = [req.body.email, req.body.password];

  con.query(sql, values, (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie("token", token);
      return res.json({ loginStatus: true });
    } else {
      return res.json({ loginStatus: false, Error: "Wrong email or password" });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM `category`";

  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/add_category", (req, res) => {
  const sql = "INSERT INTO `category` (`name`) VALUES (?)";

  con.query(sql, [req.body.category], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});

// image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
})
//end image upload

router.post("/add_employee", upload.single('image') , (req, res) => {
  const sql =
    `INSERT INTO employee  (name, email, password, address, salary, image, category_id)  VALUES (?)`;

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.salary,
      req.file.filename,
      req.body.category_id,
    ];
    con.query(sql, [values], (err, result)=>{
        if (err) return res.json({ Status: false, Error: err });
        return res.json({ Status: true });
    })
  });
});



router.get("/employee", (req, res) => {
  const sql = "SELECT * FROM `employee`";

  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get('/employee/:id', (req, res) => {
 const id = req.params.id;
 console.log(id);
 const sql = "SELECT * FROM `employee` WHERE `id` = ?";
 con.query(sql,[id], (err, result) => {
  if(err) return res.json({Status: false, Error: "Query Error"})
  return res.json({Status: true, Result: result})
})
});

router.put('/edit_employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE employee 
      SET name = ?, email = ?, salary = ?, address = ?, category_id = ? 
      WHERE id = ?`
  const values = [
      req.body.name,
      req.body.email,
      req.body.salary,
      req.body.address,
      req.body.category_id
  ]
  con.query(sql,[...values, id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

router.delete('/delete_employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM `employee` where `id` = ?"
  con.query(sql,[id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
})

router.get('/admin_count', (req, res) => {
  const sql = "SELECT count(id) AS admin FROM admin";
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
})
})
router.get('/employee_count', (req, res) => {
  const sql = "SELECT count(id) AS employee FROM employee";
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
})
})
router.get('/salary_count', (req, res) => {
  const sql = "SELECT sum(salary) AS salaryOFEmp FROM employee";
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
})
})

router.get('/admin_records', (req, res)=>{
  const sql = "SELECT * FROM admin";
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"+err})
    return res.json({Status: true, Result: result})
})
})

router.get('/admin/:id', (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const sql = "SELECT * FROM `admin` WHERE `id` = ?";
  con.query(sql,[id], (err, result) => {
   if(err) return res.json({Status: false, Error: "Query Error"})
   return res.json({Status: true, Result: result})
 })
 });
 
 router.put('/edit_admin/:id', (req, res) => {
   const id = req.params.id;
   const sql = `UPDATE admin 
       SET email = ?, password = ? WHERE id = ?`
   const values = [
       req.body.email,
       req.body.password
   ]
   con.query(sql,[...values, id], (err, result) => {
       if(err) return res.json({Status: false, Error: "Query Error"+err})
       return res.json({Status: true, Result: result})
   })
 })

 //admin delete route

/* router.delete('/delete_admin/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM `admin` where `id` = ?"
  con.query(sql,[id], (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"+err})
      return res.json({Status: true, Result: result})
  })
}) */

router.get('/logout', (req, res)=>{
  res.clearCookie('token');
  return res.json({Status: true})

})

export { router as adminRouter };
