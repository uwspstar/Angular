//install typescript globle
$ sudo npm install -g typescript

// check tsc version
$ tsc --version


// setup tsconfig.json
$ tsc --init

```javascript
tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "dist",
    "sourceMap": true
  }
}
```


// isntall tslint
$ sudo npm i tslint --g

// setup tslint.json
$ tslint --init

```javascript
 tslint.json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {},
    "rulesDirectory": []
}
```
// istall default tslint rule ( may not need)
$ npm install tslint-config-airbnb

// create first ts file
$ tsc app.ts

// compile
$ tsc

// compile
$ tsc -w