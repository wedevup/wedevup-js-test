const express = require("express");
const app = express();
const cars = require('./cars.json')
const cors = require("cors")
// const Bundler = require("parcel-bundler");
// const bundler = new Bundler("src/index.html", { logLevel: 2 });

const PORT = 3001;

// write your code here

app.use(cors({ origin: "*" }))


app.get('/cars', (req,res) => {
  let index = 0

  const { days, distance } = req.query

  const carsWithId = cars.map((car) => {
    index++

    return {
      id: index,
      ...car
    }
  })

  const filteredCars = carsWithId.filter((car) => {
    let shouldShow = true
    
    if(days && car.availability.maxDuration < parseInt(days)) {
      shouldShow = false
    }

    if(distance && car.availability.maxDistance < parseInt(distance)) {
      shouldShow = false
    }

    return shouldShow
  })

  return res.json(filteredCars).status(200)
})

app.use(express.static("server/public"));
// app.use(bundler.middleware());

app.listen(PORT, () => {
  // Clear console
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );

  console.log("\x1b[32m%s\x1b[0m", "App started successfully!");
  console.log();
  console.log("You can now view it in your browser.");
  console.log();
  console.log(`  http://localhost:${PORT}`);
  console.log();
  console.log("You'll find more instruction in the README file.");
});
