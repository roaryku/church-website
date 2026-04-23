const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./StaffContactRoutes')
const cors = require("cors")


require("dotenv").config();
mongoose.set('strictQuery', false)
// mongoose.connect('mongodb+srv://rodikaarykudev:DhtUnVeNg3tTpOKf@clusterrod.dxavu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterRod')

const PORT = 8000 || process.env.port 

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log("WE WERE CONNECTED TO MONGO"))
.catch((err) => console.log("Error"))

app.use(routes);

app.listen(PORT, () => {
    console.log('Server is listening at PORT: ${ PORT }')
})




// ID - 66eb27dc4241ee1ddbda4f9c