require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001;

const corsOptions = {
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"], 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
};

app.use(cors(corsOptions));

app.get('/api/forex', async (req, res) => {
    const { from_symbol, to_symbol } = req.query;
    const API_KEY = process.env.VANTAGE_API_KEY;
    const endpoint = process.env.ALPHA_VANTAGE_API_URL;

    try {
        const response = await axios.get(`${endpoint}/query`, {
            params: {
                function: 'FX_DAILY',
                from_symbol,
                to_symbol,
                apikey: API_KEY
            }
        });

        res.json(response.data); 
    } catch (error) {
        console.log(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});