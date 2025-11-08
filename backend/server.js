const app = require('./index');
require('dotenv').config();


const PORT = process.env.PORT || 4000;
require("./config/database");


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));