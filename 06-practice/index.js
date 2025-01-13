const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: "7C4_Rwc-1me6QO1wk9DyNDuvugcWbsrK9m2bUXuMaokviChWQw_zhFAuhSpLV87V",
    baseURL: 'http://localhost:5000',
    clientID: "3iC9Bbjpl83Yppfz0VDg29jaWiIv0mB5",
    issuerBaseURL: "https://ksniraj1992.us.auth0.com",
};

app.use(auth(config));

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/profile", requiresAuth(), (req, res) => {
    res.json(req.oidc.user);
});

// Start Server
const  port = 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});