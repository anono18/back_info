const express = require('express');
const router = express.Router();
const { createUser } = require("../controllers/usercontroller");


// Route de test
router.get('/', (req, res) => {
    res.send('Bienvenue sur mon backend Node.js !');
});

router.post("/create", createUser);  // Route pour créer un utilisateur


module.exports = router;
