#!/usr/bin/env node

import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation'
import { createSpinner } from 'nanospinner'
import RPC from 'discord-rpc'



const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms))

let clientId, state, detail, largeImageKey, largeImageText, smallImageKey, smallImageText,
buttonKey, buttonURL, secButtonKey, secButtonURL, timestamps

//#region Setup

async function Start()
{
  const welcomeText = chalkAnimation.karaoke('Welcome to Richcord Presence!')
  await sleep()
  welcomeText.stop()
  const devName = chalkAnimation.pulse('Made by Spoiled Unknown || version 1.0.2')
  await sleep()
  devName.stop()
}

async function ClientId()
{
  const response = await inquirer.prompt({
    name: 'client_id',
    type: 'input',
    message: 'Please enter the client id.',
    default: '886576833838088243'
  })

  clientId = response.client_id
}

async function State()
{
  const response = await inquirer.prompt({
    name: 'state',
    type: 'input',
    message: 'Please write the state message.',
    default: 'Richord Presence || V 1.0.2'
  })

  state = response.state
}

async function Detail()
{
  const response = await inquirer.prompt({
    name: 'detail',
    type: 'input',
    message: 'Please write the detail message.',
    default: 'Made By Spoiled Unknown'
  })

  detail = response.detail
}

async function LargeImage()
{
  const response = await inquirer.prompt({
    name: 'large_image',
    type: 'input',
    message: 'Please write the large image key.',
    default: 'richcord'
  })

  largeImageKey = response.large_image
}

async function LargeText()
{
  const response = await inquirer.prompt({
    name: 'large_text',
    type: 'input',
    message: 'Please write the large image text.',
    default: 'Richcord Presence || Version 1.0.2'
  })

  largeImageText = response.large_text
}

async function SmallImage()
{
  const response = await inquirer.prompt({
    name: 'small_image',
    type: 'input',
    message: 'Please write the small image key.',
    default: 'github'
  })

  smallImageKey = response.small_image
}

async function SmallText()
{
  const response = await inquirer.prompt({
    name: 'small_text',
    type: 'input',
    message: 'Please write the small image text.',
    default: "Visit richcord's github page to know more"
  })

  smallImageText = response.small_text
}

async function FirstButtonText()
{
  const response = await inquirer.prompt({
    name: 'first_text',
    type: 'input',
    message: 'Please write the label for button 1.',
    default: "Repository"
  })

  buttonKey = response.first_text
}

async function FirstButtonURL()
{
  const response = await inquirer.prompt({
    name: 'first_url',
    type: 'input',
    message: 'Please write the url for button 1.',
    default: "https://github.com/SpoiledUnknown/Richcord-Presence"
  })

  buttonURL = response.first_url
}

async function SecButtonText()
{
  const response = await inquirer.prompt({
    name: 'sec_text',
    type: 'input',
    message: 'Please write the label for button 2.',
    default: "Richcord Community"
  })

  secButtonKey = response.sec_text
}

async function SecButtonURL()
{
  const response = await inquirer.prompt({
    name: 'sec_url',
    type: 'input',
    message: 'Please write the url for button 2.',
    default: "https://discord.gg/AUfhhEkhgp"
  })

  secButtonURL = response.sec_url
}

async function SetTimestamps()
{
  const response = await inquirer.prompt({
    name: 'timestamps',
    type: 'confirm',
    message: 'Should the time stamps be on or off?'
  })

  if (response.timestamps) 
  {
    timestamps = new Date()
  }
  else
  {
    timestamps = null
  }
}

//#endregion


console.clear()
await Start()
await ClientId()
await Detail()
await State()
await LargeImage()
await LargeText()
await SmallImage()
await SmallText()
await FirstButtonText()
await FirstButtonURL()
await SecButtonText()
await SecButtonURL()
await SetTimestamps()

const spinner = createSpinner('Connecting to the client').start()

const richPresence = new RPC.Client({
  transport:'ipc'
})




richPresence.on('ready', async () => {

  await sleep()

  richPresence.setActivity({
    details: detail,
    state: state,
    startTimestamp: timestamps,
    largeImageKey: largeImageKey,
    largeImageText: largeImageText,
    smallImageKey: smallImageKey,
    smallImageText: smallImageText,
    buttons: [{
      label: buttonKey,
      url: buttonURL
    },{
      label : secButtonKey,
      url : secButtonURL 
    }]
  })

  spinner.success({text:'Connected...'})
  chalkAnimation.radar('Client connected successfully!')
})

richPresence.login({
  clientId: clientId
})