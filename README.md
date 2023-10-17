# Installing Cypress:

```
cd /your project path
```
### Install Cypress via npm
```
npm install cypress --save-dev
```
### Installing Cypress via Yarn
```
yarn add cypress --dev
```
# Operating System
```
macOS 10.9 and above (Intel or Apple Silicon 64-bit (x64 or arm64))

Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 

Windows 7 and above (64-bit only)
```
### Node.js
```
Node.js 18.x and above
```
# Opening the App

### Using npx
```
npx cypress open
```
### Using yarn
```
yarn run cypress open
```

### Adding npm Scripts
```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```
### Check Cypress Version
```
npx cypress --version
```