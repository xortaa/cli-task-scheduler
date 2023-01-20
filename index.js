const shell = require("shelljs")
const cron = require("node-cron")
require("dotenv").config()
const clc = require("cli-color");
const errorColor = clc.red
const colored = clc.yellow

  cron.schedule("0 9 * * 1", () => {
    shell
      .exec(`start microsoft-edge:${process.env.IT2623}`)
      .then(console.log(colored(`${process.env.IT2623} HAS OPENED`)))
      .catch((error) => console.log(errorColor(error)))
  })

  cron.schedule("0 14 * * 1", () => {
    shell
      .exec(`start microsoft-edge:${process.env.IT2609}`)
      .then(console.log(`${process.env.IT2609} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })
  
  cron.schedule("0 11 * * 2", () => {
    shell
      .exec(`start microsoft-edge:${process.env.IT2623L}`)
      .then(console.log(`${process.env.IT2623L} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })
  
  cron.schedule("0 11 * * 2", () => {
    shell
      .exec(`start microsoft-edge:${process.env.IT2623L}`)
      .then(console.log(`${process.env.IT2623L} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })
  
  cron.schedule("0 7 * * 4", () => {
    shell
      .exec(`start microsoft-edge:${process.env.IT2609}`)
      .then(console.log(`${process.env.IT2609} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })
  
  cron.schedule("0 12 * * 4", () => {
    shell
      .exec(`start microsoft-edge:${process.env.MISSING}`)
      .then(console.log(`${process.env.MISSING} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })
  
  cron.schedule("0 11 * * 5", () => {
    shell
      .exec(`start microsoft-edge:${process.env.FIL}`)
      .then(console.log(`${process.env.FIL} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })
  
  cron.schedule("0 15 * * 5", () => {
    shell
      .exec(`start microsoft-edge:${process.env.READ_PH}`)
      .then(console.log(`${process.env.READ_PH} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })
  
  cron.schedule("0 11 * * 6", () => {
    shell
      .exec(`start microsoft-edge:${process.env.FIL}`)
      .then(console.log(`${process.env.FIL} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })

  cron.schedule("0 15 * * 6", () => {
    shell
      .exec(`start microsoft-edge:${process.env.READ_PH}`)
      .then(console.log(`${process.env.READ_PH} HAS OPENED`))
      .catch((error) => console.log(errorColor(error)))
  })