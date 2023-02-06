
const router = require('express').Router();


router.get("/", (req, res)=>{
    res.json([]);
});


router.get("/:id", (req, res)=>{
    const { id } =req.params
    res.json({
       id,
       nombre: "usuario"
    });
});


router.post("/", (req, res)=>{                                 
    const { nombre,email,password,roles,creado,ultimoAcceso } =req.body           
    res.json({
       nombre,
       email,
       password,
       roles,
       creado,
       ultimoAcceso
    });
});
module.exports = router;
