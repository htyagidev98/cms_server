const express = require('express');
mongoose = require('mongoose')
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
app.use("/", require("./routes/animatedcard"))

//API ROUTES for Explore-page
app.use("/explore", require("./routes/Blockovia"));
app.use("/explore", require("./routes/paragraph"));
app.use("/explore", require("./routes/scalability"));
app.use("/explore", require("./routes/security"));
app.use("/explore", require("./routes/privacy"))

//API ROUTES for Utility-page
app.use("/utility", require("./routes/utility"));
app.use("/utility", require("./routes/metrics"));
app.use("/utility", require("./routes/utilityCount"));
app.use("/utility", require("./routes/azero"));
app.use("/utility", require("./routes/finma"));
app.use("/utility", require("./routes/economics"));
app.use("/utility", require("./routes/mechanism"))

//API ROUTES for UseCases-page
app.use("/use", require("./routes/applicationsCases"));
app.use("/use", require("./routes/casesanimated"))

//API ROUTES for Carbon-Footprint-page
app.use("/carbon-negative", require("./routes/carbon"));
app.use("/carbon-negative", require("./routes/green"));
app.use("/carbon-negative", require("./routes/accord"));
app.use("/carbon-negative", require("./routes/numbers"));
app.use("/carbon-negative", require("./routes/numbertext"));
app.use("/carbon-negative", require("./routes/validator"));
app.use("/carbon-negative", require("./routes/unitCard"));
app.use("/carbon-negative", require("./routes/actions"));
app.use("/carbon-negative", require("./routes/agriculture"))

//API ROUTES for Staking-page
app.use("/staking", require("./routes/secure"));
app.use("/staking", require("./routes/staking"));
app.use("/staking", require("./routes/stakingcard"));
app.use("/staking", require("./routes/StakingValidator"));
app.use("/staking", require("./routes/validator"));
app.use("/staking", require("./routes/nominator"))

//API ROUTES for Ecosystem-page
app.use("/ecosystem", require("./routes/ecosystem"));
app.use("/ecosystem", require("./routes/ecosystemCard"));
app.use("/ecosystem", require("./routes/imageCard"))

//API ROUTES for BULID-page
app.use("/build", require("./routes/funding"));
app.use("/build", require("./routes/purpose"));
app.use("/build", require("./routes/purposeCard"));
app.use("/build", require("./routes/resource"));
app.use("/build", require("./routes/resourceCard"));
app.use("/build", require("./routes/available"));
app.use("/build", require("./routes/tierCard"));
app.use("/build", require("./routes/consideration"));
app.use("/build", require("./routes/criteriaCard"));
app.use("/build", require("./routes/request"));
app.use("/build", require("./routes/requestCard"));
app.use("/build", require("./routes/process"));
app.use("/build", require("./routes/processCard"));
app.use("/build", require("./routes/supporter"));
app.use("/build", require("./routes/supporterCard"))

//API ROUTES for Dev portal-page
app.use("/dev", require("./routes/portal"));
app.use("/dev", require("./routes/zero"));
app.use("/dev", require("./routes/zeroCard"));
app.use("/dev", require("./routes/powered"));
app.use("/dev", require("./routes/poweredCard"));
app.use("/dev", require("./routes/developer"));
app.use("/dev", require("./routes/tutorials"));
app.use("/dev", require("./routes/tutorialCard"));
app.use("/dev", require("./routes/tools"));
app.use("/dev", require("./routes/toolsCard"));
app.use("/dev", require("./routes/additional"));
app.use("/dev", require("./routes/additionalCard"));
app.use("/dev", require("./routes/stay"));
app.use("/dev", require("./routes/stayCard"));
app.use("/dev", require("./routes/program"))


//API ROUTES for Dev portal-page
app.use("/community-page", require("./routes/social"));
app.use("/community-page", require("./routes/platforms"));
app.use("/community-page", require("./routes/ambassador"));
app.use("/community-page", require("./routes/fundingNew"));
app.use("/community-page", require("./routes/bounty"));
app.use("/community-page", require("./routes/news"));
app.use("/community-page", require("./routes/newsCard"));
app.use("/community-page", require("./routes/video"));
app.use("/community-page", require("./routes/videoCard"))

//API ROUTES for upcoming-event-page
app.use("/upcoming-events", require("./routes/event"));
app.use("/upcoming-events", require("./routes/eventCard"));
app.use("/upcoming-events", require("./routes/galleryCard"))

//API ROUTES for Ambassador-page
app.use("/ambassador", require("./routes/ambassadorProgram"));
app.use("/ambassador", require("./routes/background"));
app.use("/ambassador", require("./routes/looking"));
app.use("/ambassador", require("./routes/lookingCard"));
app.use("/ambassador", require("./routes/perks"));
app.use("/ambassador", require("./routes/perksCard"));
app.use("/ambassador", require("./routes/require"));
app.use("/ambassador", require("./routes/requireCard"));

//API ROUTES for Press/mediakit-page
app.use("/press", require("./routes/press"));



app.listen(`${process.env.PORT}`, () => {

    console.log("Server Running on port", `${process.env.PORT}`)

});


