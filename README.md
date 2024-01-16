# Richcord Presence - Discord RPC

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
[![Docs Passing](https://img.shields.io/badge/Docs-Passing-brightgreen.svg)](https://github.com/SpoiledUnknown/Richcord-Presence)

![Richorc](/assets/Richcord.png)

## Table Of Content:
1. [Description](#description)
2. [Installation](#installation)
   1. [Method 1](#method-1)
   2. [Method 2](#method-2)
3. [Setting up the dev environment](#how-to-setup-dev-environment)
4. [Creating custom client](#custom-client-setup)
5. [How to use](#how-to-use)

## Description:

 An advance discord rich presence software that allows a lot of customisation and control in hand of user without over complicating things.

 ## Installation:

***Currently we only support windows 11, more OS supported will be added.***

**Note:** *Method 2 requires the NodeJS installed in pc if not avaibale install from [here](https://nodejs.org/en/download/).*

### Method 1:

- Download the executable from [here]().
   - Double click the exe file.
   - Go through the simple prompts.
 - Note: in some cases the exe file might not work in that case use bellow provided steps -
    - Open terminal (non-admin)
    - drag and drop the exe file to the ternimal window
    - press enter.
### Method 2:
- Clone the repo, or download the source code from [here]().
- Open the ternimal at the location of the source code
- Use `cd "path/to/inside/of/source-code/"`, to access the source code.
- Run `npm install`.
- Run `npm run start` or `node index.js`

## How To Setup Dev Environment:
- Install NodeJs from [here](https://nodejs.org/en/download/).
 - Clone the repo, or download the source code from [here]().
 - Open it using [VS Code](https://code.visualstudio.com/download) or any other Code Editor/IDE.
- Press `ctrl` + `
- Run `npm install`
  
## Custom Client Setup:

Go to the *[Discord Dev Portal](https://discord.com/developers/applications)*


1. Click on tthe ***New Application*** button. 
![Step 1](/assets/step%201.png)
2. A new dailogue box appears.
3. Enter the name of the application (***This shows as the app name in discord status***)
4. Agree the terms of service.
5. Click on *create*
![Step 2](/assets/step%202.png)
6. Click on *Rich Presence*
![Step 3](/assets/step%203.png)
7. Scroll a little and click on *Add Images*
   - **Note:** *You can only add images more than 512x512 (1024x1024 is recommended).*
   - **Note:** *You can add upto 300 images.*
![Step 4](/assets/step%204.png)
8. Write the name of the asset.
   - **Note:** *You can't change the name once the asset is saved. If you want to change then delete and reupload the asset.*
   - **Note:** *Remember the name you gave to the assets as they will have to write it as is while running the app*
9. Click on *Save Changes* and wait for changes to be saved.
![Step 5](/assets/step%205.png)
10. Now again click on *General Information*.
11. Scroll down a little bit to copy your client id.
![Step 6](/assets/step%206.png)
12. Click on *Copy*.
![Step 7](/assets/step%207.png)

#### The client setup is done, now you can just paste the client id when prompted.

## How To Use:
1. The app first asks the ***Client ID***, which we have created using above provided method.
2. You then have to provide a *detail* message. This message will be shown on detail area in discord
3. Then you have to provide a *status* for your app.
4.   Then provide the *Large Image Key*, the name of the asset uploaded in custom client setup.
5.   Then provide a message for Large Image.
6.   Same step for small image, write the name of small image asset.
7.   and again a message for small image.
8.   Then write the label for first button.
9.   Then give a URL for the first button.
10.   Follow the above 2 steps for second button as well
11.   And lastly tell whether you want the timestamps to be shown or not.
  
![Example](/assets/example.png)
#### You are all done, now enjoy the Richcord by flexing on your virtual friends since you most likely don't have any irl friends.
