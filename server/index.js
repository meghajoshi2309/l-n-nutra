// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const AuthRoutes = require('./routes/authRoutes')

// const app = express();


// dotenv.config();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// // app.use('/api/auth', AuthRoutes);

// // MongoDB Atlas Connection
// const PORT = process.env.PORT || 5000;
// const MONGO_URI1 = process.env.MONGO_URI || "";

// mongoose.connect(MONGO_URI1)
//     .then(() => {
//         console.log("MongoDB Connected");
//         app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//     })
//     .catch((err) => console.error(err));



const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
