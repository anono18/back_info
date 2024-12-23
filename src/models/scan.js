const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Référence au modèle User
        required: true
    },
    scannedAt: {
        type: Date,
        default: Date.now, // Enregistre la date et l'heure du scan
    },
    location: {
        type: String,  // Optionnel : Peut contenir la localisation du scan si disponible
    },
    additionalInfo: {
        type: String, // Optionnel : Informations supplémentaires
    }
});

const Scan = mongoose.model("Scan", scanSchema);

module.exports = Scan;
