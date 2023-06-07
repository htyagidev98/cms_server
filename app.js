const express = require('express');
mongoose = require('mongoose'),
    cors = require('cors')
bodyParser = require('body-parser')
app = express();
require('dotenv').config();

// Database connectivity

var connectDb = () => {
    return mongoose.connect(`${process.env.databaseURL}`,
        console.log("Database connected")
    )
};
connectDb();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
})
);
mongoose.Promise = global.Promise;
app.use(cors());

//API ROUTES for Homa-Page
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/home"));
app.use("/", require("./routes/feature"));
app.use("/", require("./routes/bulid"));
app.use("/", require("./routes/calculation"));
app.use("/", require("./routes/blockchain"));
app.use("/", require("./routes/animated"));
app.use("/", require("./routes/application"));
app.use("/", require("./routes/network"));
app.use("/", require("./routes/drivingtext"));
app.use("/", require("./routes/drivinganimate"));
app.use("/", require("./routes/footprint"));
app.use("/", require("./routes/community"));
app.use("/", require("./routes/animatedcard"));

//API ROUTES for Explore-page
app.use("/explore", require("./routes/Blockovia"));
app.use("/explore", require("./routes/paragraph"));
app.use("/explore", require("./routes/scalability"));
app.use("/explore", require("./routes/security"));
app.use("/explore", require("./routes/privacy"));

//API ROUTES for Utility-page
app.use("/utility", require("./routes/utility"));
app.use("/utility", require("./routes/metrics"));
app.use("/utility", require("./routes/utilityCount"));
app.use("/utility", require("./routes/azero"));
app.use("/utility", require("./routes/finma"));
app.use("/utility", require("./routes/economics"));
app.use("/utility", require("./routes/mechanism"));

//API ROUTES for UseCases-page
app.use("/use", require("./routes/applicationsCases"));
app.use("/use", require("./routes/casesanimated"));

//API ROUTES for Carbon-Footprint-page
app.use("/carbon-negative", require("./routes/carbon"));
app.use("/carbon-negative", require("./routes/green"));
app.use("/carbon-negative", require("./routes/accord"));
app.use("/carbon-negative", require("./routes/numbers"));
app.use("/carbon-negative", require("./routes/numbertext"));
app.use("/carbon-negative", require("./routes/validator"));
app.use("/carbon-negative", require("./routes/unitCard"));
app.use("/carbon-negative", require("./routes/actions"));
app.use("/carbon-negative", require("./routes/agriculture"));

//API ROUTES for Staking-page
app.use("/staking", require("./routes/secure"));
app.use("/staking", require("./routes/staking"));
app.use("/staking", require("./routes/stakingcard"));
app.use("/staking", require("./routes/StakingValidator"));
app.use("/staking", require("./routes/validator"));
app.use("/staking", require("./routes/nominator"));

//API ROUTES for Ecosystem-page
app.use("/ecosystem", require("./routes/ecosystem"));
app.use("/ecosystem", require("./routes/ecosystemCard"));
app.use("/ecosystem", require("./routes/imageCard"));

//API ROUTES for BULID-page
app.use("/build", require("./routes/funding"));
app.use("/build", require("./routes/purpose"));
app.use("/build", require("./routes/purposeCard"))
app.use("/build", require("./routes/resource"))
app.use("/build", require("./routes/resourceCard"))


app.listen(`${process.env.PORT}`, () => {

    console.log("Server Running on port", `${process.env.PORT}`)

});


