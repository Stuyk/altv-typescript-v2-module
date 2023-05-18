
# alt:V TypeScript with V2 Module

This uses the new V2 module for server development.

Current restrictions:

* Server must be on the `dev` branch.
* Client must be on the `dev` branch.

Latest files are always obtained from here:

* [https://github.com/altmp/altv-js-module-v2/releases](https://github.com/altmp/altv-js-module-v2/releases)

Binary Destinations:

* libnodev2.dll must go in the root directory of the project
* js-module-v2.dll must go in the `modules` directory
* js-module-v2.pdb must go in the `modules` directory

## Installation

* [Install NodeJS 18+](https://nodejs.org/en/download/current/)
* [Install GIT](https://git-scm.com/downloads)

## Clone the Repository

Use the command below in any terminal, command prompt, etc.

```sh
git clone https://github.com/Stuyk/altv-typescript
```

## Install the Repository

Use the command below in any terminal, command prompt, etc.

```sh
cd altv-typescript
npm install
```

## Download Server Files

Use the command below in any terminal, command prompt, etc. This will download all necessary server files from an additional package used by this project.

```sh
npm run update
```

_This will automatically download `dev` binaries._


## Start Production Server (Windows)

Run this command to run the server in production mode.

```
npm run windows
```

## Start Production Server (Linux)

Run this command to run the server in production mode.

```
npm run linux
```

## Start Developer Server

Run this command to run the server in development mode.

This will automatically reconnect your alt:V Client if you have `debug` mode turned on.

```
npm run dev
```

## End Server Runtime

Use the key combination `ctrl + c` to kill your server in your terminal, command prompt, etc.

## How to Add Mods, and New Resources

Always add your already compiled resources & mods into the `resources` folder.
