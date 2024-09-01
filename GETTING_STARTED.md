### Getting started from scratch

Follow these steps to get up and running with project as it is.

Install clasp if you haven't already. And login

`npm install @google/clasp -g`

```shell
clasp login
```

Then create the project with type Sheets as the example code assumes being inside a spreadsheet.

```shell
clasp create --type sheets <my-first-project>
```

This will create a `.clasp.json` in which you have to update rootDir to `"dist/gas"`.


Save your clasp config as an environment, make sure it exists first.

`npm run env:save dev`

Now you are ready to build and push the example code:

`npm run build`

And push it with:

`npm run push`

