const dotenv = require('dotenv');

dotenv.config();

const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: "Hello from endpoint0"
        }

    })
})

app.get('/endpoint-1', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: "Hello from endpoint1"
        }

    })
})
app.get('/endpoint-2', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: "Hello from endpoint2"
        }

    })
})

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is running on this port ${PORT}`));