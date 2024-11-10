import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import adminRoutes from './routes/admin.js';

// npm install --save-dev nodemon  (library)

// Останавливаем сервер по-прежнему командой Control + C
// npm start

const app = express();
const PORT = 5076;  //   https://askomdch.com    5076

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.info("GET request to endpoint '/' received.");

    res.send("Node Express API Server.")
})

app.use('/users', usersRoutes);
app.use('/admin', adminRoutes);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
