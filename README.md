# Playwright + Allure (AutomationPractice)

## Setup
```bash
npm install
npx playwright install
```

## Run tests
```bash
npm test
```

## Allure report (screenshots & videos on failure included)
```bash
npm run allure:generate
npm run allure:open
# or live server:
npm run allure:serve
```

> No global install needed — this project uses local `allure-commandline` via `npx`.
