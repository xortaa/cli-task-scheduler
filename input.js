const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

const prompt = (query) => new Promise((resolve) => readline.question(query, resolve))

async function mondayStart() {
  const monday = await prompt("Do you have anything scheduled for monday? (Y/N): ")
  if (monday == "Y" || monday.toLowerCase() == "y") {
    mondayCount = 1
    mondayArray = []

    // TODO IMMEDIATELY ADD IT TO A TEXT FILE AFTER INPUT INSTEAD OF PUSHING IT TO AN ARRAY
    // GOOD LUCK FUTURE ME 
    for (let i = 0; i < mondayCount; i++) {
      console.log(`old ${i}`)
      i = await prompt("Copy and paste the link you want to open here: ")
      console.log(`new ${i}`)
      const time = await prompt("What time of the day do you want to the link to be opened? (ex. 1330): ")
      currentInputs = {
        link: i,
        day: "monday",
        time,
      }
      mondayArray.push(currentInputs)
      console.log(`This is the pushed array ${mondayArray}`)
      console.log(`${mondayArray[0].link}`)
      const continueQuestion = await prompt("Do you have another thing scheduled for monday? (Y/N): ")
      if (continueQuestion === "Y" || continueQuestion.toLowerCase() === "y") { 
        mondayCount++
      } else if (continueQuestion === "N" || continueQuestion.toLowerCase() === "n") { 
        // tuesday()
        console.log("hehe");
      } else {
        console.log(`Invalid input ${continueQuestion}. Must only be Y/N`)
        // turn it into a function you can call back later 😴
      }
    }
  } else if (monday == "N" || monday.toLowerCase() == "n") {
    // tuesday()
    console.log("hehe");
  } else {
    console.log(`Invalid input ${monday}. Must only be Y/N`)
    mondayStart()
  }
}

async function tuesday() {
  const tuesday = await prompt("Do you have anything scheduled for tuesday? (Y/N): ")
  if (tuesday == "Y" || tuesday.toLowerCase() == "y") {
  } else if (tuesday == "N" || tuesday.toLowerCase() == "n") {
  } else {
    console.log(`Invalid input ${tuesday}. Must only be Y/N`)
    tuesday()
  }
}

mondayStart()
