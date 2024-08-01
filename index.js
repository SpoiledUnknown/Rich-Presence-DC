"use strict";
process.noDeprecation = true; //temporary solution, idk how long this "temporary" period is gonna take

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import RPC from "discord-rpc";

const author = "Spoiled Unknown";
const version = "1.1.0";

let clientId,
  state,
  detail,
  largeImageKey,
  largeImageText,
  smallImageKey,
  smallImageText,
  firstButtonKey,
  firstButtonURL,
  secondButtonKey,
  secondButtonURL,
  timestamps;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function Start() {
  const welcomeText = chalkAnimation.karaoke("Welcome to Richcord Presence!");
  await sleep();
  welcomeText.stop();
  const devName = chalkAnimation.pulse(
    `Made by ${author} || Version ${version}`
  );
  await sleep();
  devName.stop();
}

//#region Main Logic
async function ClientId() {
  const defaultClientId = "886576833838088243";
  let valid = false;

  while (!valid) {
    const response = await inquirer.prompt({
      name: "client_id",
      type: "input",
      message: "Please enter the client id.",
      default: defaultClientId,
      validate: (input) => {
        if (!/^\d+$/.test(input)) {
          return "Client ID must be a number.";
        }
        if (input.length !== defaultClientId.length) {
          return `Client ID must be exactly ${defaultClientId.length} digits long.`;
        }
        return true;
      },
    });
    clientId = response.client_id;

    if (/^\d+$/.test(clientId) && clientId.length === defaultClientId.length) {
      valid = true;
    } else {
      console.log("Invalid client ID. Please try again.");
    }
  }
}

async function State() {
  const response = await inquirer.prompt({
    name: "state",
    type: "input",
    message: "Please write the state message.",
    default: `Richord Presence || v${version}`,
  });

  state = response.state;
}

async function Detail() {
  const response = await inquirer.prompt({
    name: "detail",
    type: "input",
    message: "Please write the detail message.",
    default: `Made By ${author}`,
  });

  detail = response.detail;
}

async function LargeImage() {
  const response = await inquirer.prompt({
    name: "large_image",
    type: "input",
    message: "Please write the large image key.",
    default: "richcord",
  });

  largeImageKey = response.large_image;
}

async function LargeImageText() {
  const response = await inquirer.prompt({
    name: "large_text",
    type: "input",
    message: "Please write the large image text.",
    default: `Richcord Presence || Version ${version}`,
  });

  largeImageText = response.large_text;
}

async function SmallImage() {
  const response = await inquirer.prompt({
    name: "small_image",
    type: "input",
    message: "Please write the small image key.",
    default: "github",
  });

  smallImageKey = response.small_image;
}

async function SmallImageText() {
  const response = await inquirer.prompt({
    name: "small_text",
    type: "input",
    message: "Please write the small image text.",
    default: "Visit richcord's github page to know more",
  });

  smallImageText = response.small_text;
}

async function FirstButtonText() {
  const response = await inquirer.prompt({
    name: "first_text",
    type: "input",
    message: "Please write the label for button 1.",
    default: "Repository",
  });

  firstButtonKey = response.first_text;
}

async function FirstButtonURL() {
  const response = await inquirer.prompt({
    name: "first_url",
    type: "input",
    message: "Please write the url for button 1.",
    default: "https://github.com/SpoiledUnknown/Richcord-Presence",
  });

  firstButtonURL = response.first_url;
}

async function SecondButtonText() {
  const response = await inquirer.prompt({
    name: "sec_text",
    type: "input",
    message: "Please write the label for button 2.",
    default: "Richcord Community",
  });

  secondButtonKey = response.sec_text;
}

async function SecondButtonURL() {
  const response = await inquirer.prompt({
    name: "sec_url",
    type: "input",
    message: "Please write the url for button 2.",
    default: "https://discord.gg/AUfhhEkhgp",
  });

  secondButtonURL = response.sec_url;
}

async function SetTimestamps() {
  let valid = false;

  while (!valid) {
    const response = await inquirer.prompt({
      name: "timestamps",
      type: "input",
      message: "Should the time stamps be on or off? (yes/y or no/n)",
      validate: (input) => {
        const normalizedInput = input.trim().toLowerCase();
        if (["yes", "y", "no", "n"].includes(normalizedInput)) {
          return true;
        }
        return 'Please enter "yes/y" or "no/n".';
      },
    });

    const normalizedInput = response.timestamps.trim().toLowerCase();
    if (["yes", "y"].includes(normalizedInput)) {
      timestamps = new Date();
      valid = true;
    } else if (["no", "n"].includes(normalizedInput)) {
      timestamps = null;
      valid = true;
    } else {
      console.log('Invalid input. Please enter "yes/y" or "no/n".');
    }
  }
}
//#endregion

console.clear();
await Start();
await ClientId();
await State();
await Detail();
await LargeImage();
await LargeImageText();
await SmallImage();
await SmallImageText();
await FirstButtonText();
await FirstButtonURL();
await SecondButtonText();
await SecondButtonURL();
await SetTimestamps();

const spinner = createSpinner("Connecting to the client").start();

await sleep();
const richPresence = new RPC.Client({
  transport: "ipc",
});

richPresence.on("ready", async () => {
  richPresence.setActivity({
    details: detail,
    state: state,
    startTimestamp: timestamps,
    largeImageKey: largeImageKey,
    largeImageText: largeImageText,
    smallImageKey: smallImageKey,
    smallImageText: smallImageText,
    buttons: [
      {
        label: firstButtonKey,
        url: firstButtonURL,
      },
      {
        label: secondButtonKey,
        url: secondButtonURL,
      },
    ],
  });

  spinner.success({ text: "Connected..." });
  chalkAnimation.radar("Client connected successfully!");
});

richPresence.login({
  clientId: clientId,
});

process.on("uncaughtException", async (err) => {
  spinner.error({ text: `There was an uncaught error: \n  "${err}"` });
  const response = await inquirer.prompt({
    name: "exit",
    type: "input",
    message: "Press any key to exit the software.",
  });
  if (response.exit) {
    process.exit(1);
  }
});
