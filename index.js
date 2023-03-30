const shell = require("shelljs")
const cron = require("node-cron")
require("dotenv").config()

const clc = require("cli-color")
const yellow = clc.yellow
const green = clc.green
const yellowBright = clc.yellowBright
const red = clc.red

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

const openChromeProfileAndLink = async (link) => {
  await shell.exec('start chrome --profile-directory="Profile 5"')
  shell.exec(`start chrome ${link}`)
  console.log(yellow(`${link} HAS OPENED`))
}

const openFirefoxAndLink = (link) => {
  shell.exec(`start firefox ${link}`)
  console.log(yellow(`${link} HAS OPENED`))
}

console.log(green("App is now running"))


const prompt = (query) => new Promise((resolve) => readline.question(query, resolve))
async function getInputs() {
  try {
    const browser = await prompt(yellowBright("Which browser are will you be using? (firefox or chrome only): "))
    if (browser.toLowerCase() === "chrome" || browser.toLowerCase() === "firefox") {
      console.log(browser)
    }
    if (browser.toLowerCase() === "chrome") {
      const profile = await prompt(yellowBright("Which profile number will you be using? (ex. input: 5): "))
      console.log(`Using ${browser} --profile-directory="Profile ${profile}`)
    } else {
      console.log(red(`Invalid browser ${browser}. firefox or chrome only`))
      getInputs()
    }

  } catch (error) {
    console.error(error)
  }
}

getInputs()

cron.schedule("0 9 * * 1", () => {
  openChromeProfileAndLink(process.env.IT2623)
})

cron.schedule("0 14 * * 1", () => {
  openChromeProfileAndLink(process.env.IT2609)
})

cron.schedule("0 11 * * 2", () => {
  openChromeProfileAndLink(process.env.IT2623L)
})

cron.schedule("0 7 * * 4", () => {
  openChromeProfileAndLink(process.env.IT2609)
})

cron.schedule("0 12 * * 4", () => {
  openChromeProfileAndLink(process.env.PATH_FIT)
})

cron.schedule("0 11 * * 5", () => {
  openChromeProfileAndLink(process.env.FIL)
})

cron.schedule("0 15 * * 5", () => {
  openChromeProfileAndLink(process.env.READ_PH)
})

cron.schedule("0 11 * * 6", () => {
  openChromeProfileAndLink(process.env.FIL)
})

cron.schedule("0 15 * * 6", () => {
  openChromeProfileAndLink(process.env.READ_PH)
})
