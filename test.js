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
