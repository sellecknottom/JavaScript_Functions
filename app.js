console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    //checks for negative number and returns odds
    for (ψ = -1; ψ >= count; ψ--) {
      if (ψ % 2 != 0) console.log(ψ);
    }
  } else if (count == 0) {
    //checks for 0
    return console.log(count);
  }
  for (θ = 1; θ <= count; θ++) {
    //returns odd positive numbers
    if (θ % 2 != 0) {
      console.log(θ);
    }
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function userPrompts() {
  //Prompts user for name and age
  let userName = prompt("Enter your name:");

  let age = prompt("Enter your age:");

  age = parseInt(age);

  checkAge(userName, age);
}

function checkAge(userName, age) {
  if (!userName || !age) {
    //recalls userPrompt if no age or userName is entered
    console.log("Invalid, try again:");
    userPrompts();
  } else if (age >= 16) {
    //Can drive
    console.log(`Congrats ${userName}, you can drive!`);
  } else if (age < 16) {
    //Can't drive
    console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
  }
}
userPrompts();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function pointPlotter(x, y) {
  if (x === 0 && y === 0) {
    console.log(`(${x}, ${y}) is at the center of the Cartesian plane.`);
  } else if (x === 0 && (y > 0 || y < 0)) {
    console.log(`(${x}, ${y}) is on the 'x' axis.`);
  } else if ((x > 0 || x < 0) && y === 0) {
    console.log(`(${x}, ${y}) is on the 'y' axis.`);
  } else if (x > 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 1`);
  } else if (x < 0 && y > 0) {
    console.log(`(${x}, ${y}) is in Quadrant 2`);
  } else if (x < 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 3`);
  } else if (x > 0 && y < 0) {
    console.log(`(${x}, ${y}) is in Quadrant 4`);
  }
}
//Tests
console.log(pointPlotter(0, 0));
console.log(pointPlotter(0, -5));
console.log(pointPlotter(0, 5));
console.log(pointPlotter(5, 0));
console.log(pointPlotter(-5, 0));
console.log(pointPlotter(-5, 5));
console.log(pointPlotter(5, -5));
console.log(pointPlotter(5, 5));
console.log(pointPlotter(-5, -5));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangles(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    //checks if sides form valid triangle
    return `Invalid triangle`;
  } else if (a === b && a === c) {
    //checks if equilateral triangle
    console.log(`Sides ${a}, ${b}, ${c} make an equilateral triangle`);
  } else if (a === b || a === c || b === c) {
    //checks if sids form isosceles triangle
    console.log(`Sides ${a}, ${b}, ${c} make an isosceles triangle`);
  } else if (
    a ** 2 + b ** 2 == c ** 2 ||
    a ** 2 + c ** 2 == b ** 2 ||
    b ** 2 + c ** 2 == a ** 2
  ) {
    //checks if sides form a right triangle
    console.log(`Sides ${a}, ${b}, ${c} make a right triangle`);
  } else {
    return `Sides ${a}, ${b}, ${c} make a scalene triangle`;
  }
}

// Tests
console.log(triangles(5, 5, 5)); // Equilateral triangle
console.log(triangles(3, 4, 4)); // Isosceles triangle
console.log(triangles(3, 4, 5)); // Scalene triangle
console.log(triangles(1, 1, 2)); // Invalid triangle

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsage(planLimit, day, usage) {
  //Gets user's plan info
  let cellPlanLimit = prompt(`Enter your cell phone plan's data limit:`);
  planLimit = parseInt(cellPlanLimit);
  let date = prompt(`Enter today's day of the month`);
  day = parseInt(date);
  let usedData = prompt("Enter how much data you have used so far:");
  usage = parseInt(usedData);

  let planDailyLimit = planLimit / 30;
  let userAverageUse = usage / day;
  let recommendedUse = (planLimit - usage) / (30 - day);

  console.log(`${day} days used. ${30 - day} days remaining.`);
  console.log(`Average daily use: ${userAverageUse.toFixed(2)} GB/day.`);

  if (usage > planLimit) {
    //User is already past 30 day limit
    console.log(
      `You are EXCEEDING your average daily use (${planDailyLimit} GB/day)`
    );
    console.log(
      `Continuing this high usage will cause you to exceed your data plan by ${
        userAverageUse * 30
      }`
    );
    console.log(`Contact your local sales rep to get a better plan.`);
  }

  if (userAverageUse == planDailyLimit) {
    //User is on track with daily limit
    console.log(`You are on track with your data plan. Well done.`);
  } else if (userAverageUse > planDailyLimit) {
    //User is exceeding daily limit
    console.log(
      `You are EXCEEDING your average daily use (${planDailyLimit} GB/day)`
    );
    console.log(
      `Continuing this high usage will cause you to exceed your data plan by ${
        userAverageUse * 30
      }`
    );
    console.log(
      `To stay below your data plan, use no more than ${recommendedUse.toFixed(
        2
      )} GB/day.`
    );
  } else if (userAverageUse < planDailyLimit) {
    //User is below daily limit
    console.log(`You are not using all of your data.`);
    console.log(
      `Remember that data does not roll over to the next data period.`
    );
    console.log(
      `To use all of your data by the end of the period use ${(
        (usage - planDailyLimit) /
        (30 - day)
      ).toFixed(2)} GB/day.`
    );
  }
}
dataUsage();
