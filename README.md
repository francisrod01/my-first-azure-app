# DevOpsChallenge - Deploy on Azure

## Deploy an Angular app on Azure Static Web Apps

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [Angular](https://angular.io/) apps in minutes. Use this repo with the [Angular quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=angular) to build and customize a new static site.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Project setup

```bash
npm install
```

### Start the dev server

```bash
npm run swa:start
```

> Note: This command will use the local configuration file `swa-cli.config.json`.

### Run unit tests

```bash
npm test
```

### Run e2e tests

Cypress is comming soon..


### Lints and fixes files

```bash
npm run lint
```

### Compiles and minifies for production

```bash
npm run build
```

### Login to Azure

```bash
npm run swa:login
```

### Deploy to Azure

```bash
npm run swa:deploy
```

## Azure Functions local environment variables

Create a `local.settings.json file` located in `api-app` folder.

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "APPLICATIONINSIGHTS_CONNECTION_STRING": ""
  }
}
```

## Starting the project

**Using docker-compose:**

```bash
~$ docker-compose up --build
```

**Cleaning all Docker instances:**

```bash
~$ sudo docker system prune --all
```

You'll see that all containers, networks, images and build cache are gone

```bash
eleted: sha256:b405fd4a2e8fb3417e2882a0cf36ee937cf19294cb8af27a8f79c07345ce6ed4
deleted: sha256:73a5f41dbc760c8726813924f7dfef5fe915d87a8780d81b733c1b185f2f54a8
deleted: sha256:a6097bda76c225215708930a958a296fe31302f45c888b9db3c58ce9d9f574ad
deleted: sha256:fb08a32d906afda391f3e305f20ab5ff1f07471fe8078ee0be6f78a8aaec964a
deleted: sha256:04883debec4afae495d663688b7622b1678675bfb8e07a81343c580dcaae3d27
deleted: sha256:8850254a1d99ddf5b6068bf07001df6dfc684fa2c4e8a32b18e0bdcb21640aba
deleted: sha256:fc3f1e8526fb8791da8c7bae9ec19d9ac90d40c7c262ec6f3e1a588a08a97d8b
deleted: sha256:e8919b3caf4b91d0012f4bd0eef316e0144e3f432ddf6fd016a3667c8af608b5
deleted: sha256:4fc242d58285699eca05db3cc7c7122a2b8e014d9481f323bd9277baacfa0628

Total reclaimed space: 2.602GB
```
