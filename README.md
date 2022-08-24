# BostonHacks Registration Portal 2022

[![Actions Status](https://github.com/bostonhacks/bostonhacks-2022/workflows/Production%20Workflow/badge.svg)](https://github.com/Bostonhacks/BostonHacks-2022/actions)
[![License](http://img.shields.io/badge/License-MIT-brightgreen.svg)](./LICENSE)

## Project setup

```bash
yarn install
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deploying the Website to Staging

After running the buildscript, run the following command.

```bash
firebase deploy --only hosting:staging
```

Open [https://staging.bostonhacks.io](https://staging.bostonhacks.io/) to view staging

## Deploying the Website to Production

After running the buildscript, run the following command.

```bash
firebase deploy --only hosting:production
```

Open [https://bostonhacks.io](https://bostonhacks.io/) to view production
