const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/static_files"));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  // if user is at "***/" then render index.ejs
  return res.render("index");
});
app.get("/cityPage/*", function (req, res) {
  // if user is at "***/" then render index.ejs
  return res.render("cityPage");
});

cityJSON = [
  {
    name: "Tallinn",
    current_temperature: "10",
    day_temperature: "12",
    night_temperature: "8",
    conditions: "Cloudy",
  },
  {
    name: "Canberra",
    current_temperature: "23",
    day_temperature: "26",
    night_temperature: "19",
    conditions: "Sunny",
  },
  {
    name: "Tokyo",
    current_temperature: "8",
    day_temperature: "10",
    night_temperature: "6",
    conditions: "Rainy",
  },
];

app.get("/weather", function (req, res) {
  // if user is at "***/" then render index.ejs

  res.send(cityJSON);

  //return res.render("cityPage");
});

app.get("/api/:city", function (req, res) {
  // if user is at "***/" then render index.ejs

  const city = req.params.city;
  console.log(city);
  for (let i = 0; i < cityJSON.length; i++) {
    let cityObj = cityJSON[i];
    if (cityObj.name == city) {
      console.log(cityObj);
      return res.send(cityObj);
    }
  }

  //return res.render("cityPage");
});

var PORT = 2000;

app.listen(PORT, async function () {
  console.log("Server is running on port: http://127.0.0.1:" + PORT);
  //console.log(await infoByName("joosep"));
  //getNameFromEmail();
  // getCommunity_discovery();
});
