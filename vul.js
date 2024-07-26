{
  "name": "init-package-json",
  "version": "6.0.3",
  "main": "lib/init-package-json.js",
  "scripts": {
    "test": "tap",
    "lint": "eslint \"**/*.{js,cjs,ts,mjs,jsx,tsx}\"",
    "postlint": "template-oss-check",
    "lintfix": "npm run lint -- --fix",
    "snap": "tap",
    "posttest": "npm run lint",
    "template-oss-apply": "template-oss-apply --force",
    "start": "node index.js",
    "start-vulnerable-sql": "node vulnerable-sql.js",
    "start-vulnerable-xss": "node vulnerable-xss.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/npm/init-package-json.git"
  },
  "author": "GitHub Inc.",
  "license": "ISC",
  "description": "A node module to get your node module started",
  "dependencies": {
    "@npmcli/package-json": "^5.0.0",
    "npm-package-arg": "^11.0.0",
    "promzard": "^1.0.0",
    "read": "^3.0.1",
    "semver": "^7.3.5",
    "validate-npm-package-license": "^3.0.4",
    "validate-npm-package-name": "^5.0.0"
  },
  "devDependencies": {
    "@npmcli/config": "^8.2.0",
    "@npmcli/eslint-config": "^4.0.0",
    "@npmcli/template-oss": "4.22.0",
    "tap": "^16.0.1"
  },
  "engines": {
    "node": "^16.14.0 || >=18.0.0"
  },
  "tap": {
    "test-ignore": "fixtures/",
    "nyc-arg": [
      "--exclude",
      "tap-snapshots/**"
    ],
    "timeout": 300
  },
  "keywords": [
    "init",
    "package.json",
    "package",
    "helper",
    "wizard",
    "wizerd",
    "prompt",
    "start"
  ],
  "files": [
    "bin/",
    "lib/"
  ],
  "templateOSS": {
    "//@npmcli/template-oss": "This file is partially managed by @npmcli/template-oss. Edits may be overwritten.",
    "version": "4.22.0",
    "publish": true
  }
}
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE user (id INT, name TEXT)");

  const insert = db.prepare("INSERT INTO user VALUES (?, ?)");
  insert.run(1, "admin");
  insert.finalize();

  db.each("SELECT id, name FROM user", (err, row) => {
    console.log(row.id + ": " + row.name);
  });
});

function getUserByName(name) {
  // Vulnerable to SQL Injection
  db.get(`SELECT id, name FROM user WHERE name = '${name}'`, (err, row) => {
    if (err) {
      console.error(err.message);
    } else if (row) {
      console.log(row.id + ": " + row.name);
    } else {
      console.log("No user found");
    }
  });
}

// Example usage
getUserByName("admin' OR '1'='1"); // This would return all users
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const username = req.body.username;
  // Vulnerable to XSS
  res.send(`Hello, ${username}`);
});

// Example usage
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
