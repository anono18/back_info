// const User = require("../models/User");

// const createUser = async (req, res) => {
//     try {
//         const { name, firstname, date_naiss, work, links, imageUrl } = req.body;
//         const newUser = new User({
//             name,
//             firstname,
//             date_naiss,
//             work,
//             links,
//             imageUrl
//         });
        
//         await newUser.save();
//         res.status(201).json({ message: "User created successfully", user: newUser });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating user", error: error.message });
//     }
// };

// module.exports = { createUser };

const User = require("../models/User");

const createUser = async (req, res) => {
    try {
        const { name, firstname, date_naiss, work, links, imageUrl } = req.body;

        // Vérifier la validité des données de l'utilisateur
        if (!name || !firstname || !date_naiss) {
            return res.status(400).json({ message: "Name, firstname, and date_naiss are required." });
        }

        // Générer un ID unique en récupérant le dernier utilisateur dans la base de données
        const lastUser = await User.findOne().sort({ id: -1 });
        const newId = lastUser ? lastUser.id + 1 : 1;  // Si aucun utilisateur, commence à 1

        // Créer le nouvel utilisateur avec l'ID généré
        const newUser = new User({
            id: newId,   // Assurez-vous de spécifier l'ID généré
            name,
            firstname,
            date_naiss,
            work,
            links,
            imageUrl
        });

        // Sauvegarder l'utilisateur dans la base de données
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);  // Ajoutez un log pour aider à déboguer
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

module.exports = { createUser };

