const router = require("express").Router();
const workout = require("../models/workout.js");

router.post("/api/workouts", ( req, res ) => {
  workouts.create({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  workout.findByIdAndUpdate(
      params.id,
      {$push: {exercises: body}},
      {new: true, runValidators: true},
  )
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  workout.find()
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workout.find({}).limit(7)
    .then(dbworkout => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;

