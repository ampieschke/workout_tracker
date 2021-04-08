const router = require("express").Router();

const Workout = require("../models/workout.js");

router
  .route("/api/workouts")
  .post(({ body }, res) => {
    Workout.create({ day: new Date(), ...body })
      .then((res) => {
        res.json(res);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  })
  .get((req, res) => {
    Workout.find({})
      .then((res) => {
        console.log(res);
        res.json(res);
      })
      .catch((err) => {
        res.json({ erorr: err });
      });
  });

router.route("/api/workouts/:id").put((req, res) => {
  // db.workout.update({ id: req.body.params }), { $push: { exercises: { res } } };
  // Find the workout based on the route parameter
  // Add an exercise from the request body
  res.json({ succses: true });
});

router.get("/api/excercise", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((res) => {
      res.json(res);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
