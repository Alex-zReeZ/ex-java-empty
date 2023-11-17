# JavaScript exercises

> Some basic exercises to discover JS.

## Setup

Install node.js on your system, you need node 20 !
You can use [nodesource builds to install node v20](https://github.com/nodesource/distributions#installation-instructions-1). 

```shell
# clone the repository or download the exercises
# Move into the repository
cd ex-js
# Install dependencies
npm i
# Install playwright browser for e2e tests
npx playwright install
```

## Simple syntax exercises

> **Launch the tests by typing `npm run test`**, this will launch all tests, and rerun tests at each file change.
> You can also launch test from your IDE.
> You can browse tests, they are located in files ending with `.test.js`.

1. [Basic conditions](src/basics/conditions.js)
2. [Manipulating strings](src/basics/strings.js)
3. [Maths](src/basics/maths.js)
4. [Arrays](src/arrays/arrays.js)
5. [Objects](src/objects/objects.js)

## Interacting with browser and dom exercises

> First you need to launch de dev server `npm run dev`, to see your results in the browser. **The dev
> server must be started for the tests to execute correctly**.
> **Launch the tests by typing `npx playwright test`**, if you encounter difficulties,
> you can run the tests in ui mode, to see wich test fails : `npx playwright test --ui`.

1. [Dom basics](src/dom/dom.js)
2. [Click events](src/events/clicks.js)
3. [Input events](src/events/inputs.js)
4. [Mouse and focus events](src/events/movements.js)
5. [Fetch data](src/fetch/fetchData.js)
