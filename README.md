
# Lab - React Calculator

A simple React calculator.

[Project hosted on GitHub pages](https://raissa-k.github.io/lab-react-calculator/)

![Design](https://res.cloudinary.com/dz209s6jk/image/upload/v1652199544/Challenges/dauk39tfkwcnqcgucfxm.jpg)

## Roadmap

- Split code into smaller components
- Refactor multiple useState into useReducer 


## Run Locally

Clone the project

```bash
  git clone https://github.com/raissa-k/lab-react-calculator.git
```

Go to the project directory

```bash
  cd lab-react-calculator
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment to GitHub pages:

Update `package.json`:
```bash
"homepage": "https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/",
```

Update `vite-config.json`
```bash
base: '/<YOUR-REPO-NAME>/',
```

Add a new repository secret `DEPLOY_TOKEN` through `https://github.com/settings/tokens` with workflow permissions.

Either run from your terminal:
```bash
  npm run deploy
```
Or make use of GitHub workflow actions to automatically deploy updates when merging into `main`.


## Acknowledgements

 - [Frontend Mentor Calculator Challenge](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29)
 

