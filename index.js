const shell = require("shelljs")
const cron = require("node-cron")
require("dotenv").config()
const clc = require("cli-color")
const yellow = clc.yellow
const green = clc.green

const openChromeProfileAndLink = async (link) => {
  await shell.exec('start chrome --profile-directory="Profile 5"')
  shell.exec(`start chrome ${link}`)
  console.log(yellow(`${link} HAS OPENED`))
}

console.log(green("App is now running"))

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
