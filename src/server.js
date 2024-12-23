const app = require('./app');
require('dotenv').config();


// Port par défaut
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
