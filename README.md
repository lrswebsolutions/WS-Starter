# WS Starter
A default front-end development setup for LRS Web Solutions using Foundation, SASS, and Grunt.

## Getting Started
1. Pull the latest version of the master branch.
2. Copy all contents and paste into your new project folder.
3. Edit details of `package.json` to reflect project details.
4. Instead of running `npm install` to get Grunt going, you can use a centralized copy of `node_modules` following the instructions documented here: [http://bit.ly/1nyizF4](http://bit.ly/1nyizF4)

## Usage
- Inside `assets/_source/scss/` are multiple folders, some of which prepopulated with commonly used files.
- The `modules` folder is commonly where `scss` files for DNN Modules are stored, but can be used for any modular item that is not necessarily unique to this project.

### Notes
- SASS is compiled twice. Once as `assets/css/main.css` which is expanded for the development environment and troubleshooting purposes. And again as `assets/css/main.min.css` for the production environment.
- The default `index.html` references the expanded `main.css` file which should be changed to the `main.min.css` file before going from local development to demo, or demo to production.
