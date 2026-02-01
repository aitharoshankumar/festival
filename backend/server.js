const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const festivals = [
  { name: "Diwali", date: "November", description: "Festival of lights." },
  { name: "Holi", date: "March", description: "Festival of colors." },
  { name: "Dussehra", date: "October", description: "Victory of good over evil." },
  { name: "Pongal", date: "January", description: "Harvest festival of Tamil Nadu." },
  { name: "Sankranti", date: "January", description: "Harvest festival of India." },
  { name: "Eid", date: "April", description: "Festival of peace and charity." },
  { name: "Christmas", date: "December", description: "Birth of Jesus Christ." },
  { name: "Ganesh Chaturthi", date: "September", description: "Lord Ganesha festival." },
  { name: "Navratri", date: "October", description: "Nine nights festival." },
  { name: "Onam", date: "August", description: "Harvest festival of Kerala." }
];

app.get("/api/festivals", (req, res) => {
  res.json(festivals);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
