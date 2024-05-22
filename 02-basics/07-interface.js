// tsc 07-interface.ts
// node 07-interface.js
var hitesh = {
    dbId: 22,
    email: "h@h.com",
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
hitesh.email = "h@hc.com";
// hitesh.dbId = 33
// console.log(hitesh)
