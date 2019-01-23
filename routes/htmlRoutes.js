var path = require("path");
//will need to be updated based on handlebars page links
module.exports = function(app) {
   // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route 
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM footprint;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }
        res.render("index", { footprint: data })
    })
  });

  // footprint calculator route
  app.get("/footprint", function(req, res) {
    res.sendFile(path.join(__dirname, "calculator"));
  });

  // checklist route
  app.get("/checklist", function(req, res) {
    res.sendFile(path.join(__dirname, "checklist"));
  });

//   // resources route
//   app.get("/resources", function(req, res) {
//     res.sendFile(path.join(__dirname, "resources"));
//   });

};