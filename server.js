const express = require("express");
const morgan = require("morgan");
// const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/workouttracker",
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//   }
// );

// routes

// app.use(require("./routes/htmlroutes.js"));
// app.use(require("./routes/apiroutes.js"));

// require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
