require('./models/animais');

const express = require('express');
const cors = require('cors');
const { routes } = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

// Mude a porta se precisar
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`API iniciada: http://localhost:${PORT}`);
});
