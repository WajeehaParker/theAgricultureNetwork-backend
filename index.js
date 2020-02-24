const express = require('express');
const cors = require('cors');
const bodyParser    = require('body-parser');
const usersRoutes = require('./routers/users-routes');
const cropsRoutes = require('./routers/crops-routes');
const bioControlRoutes = require('./routers/bioControl-routes');
const chemControlRoutes = require('./routers/chemControl-routes');
const mechControlRoutes = require('./routers/mechControl-routes');
const culControlRoutes = require('./routers/culControl-routes');
const pestAndCropRoutes = require('./routers/pestAndCrop-routes');
const pestRoutes = require('./routers/pests-routes');
const districtRoutes = require('./routers/districts-routes');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users', usersRoutes);
app.use('/crops', cropsRoutes);
app.use('/bioControls', bioControlRoutes);
app.use('/chemControls', chemControlRoutes);
app.use('/mechControls', mechControlRoutes);
app.use('/culControls', culControlRoutes);
app.use('/pestAndCrop', pestAndCropRoutes);
app.use('/pests', pestRoutes);
app.use('/districts', districtRoutes);

app.get('/', (req,res) => {
    res.send("hello world, its express server")
});

app.listen(4000,()=>{
    console.log("server runing on port 4000");
})
