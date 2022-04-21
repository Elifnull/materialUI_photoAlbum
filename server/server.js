const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json()); //to be able to use json format
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: "http://localhost:3000"})); //allows for cross origin communication between port 3k and 8k (nodejs and react)

require('/config/mongoose.config');
require('.routes/photo.routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`));
