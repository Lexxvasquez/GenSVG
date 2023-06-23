const { prompt }=require('inquirer');
const { questions,genLogo } = require('./lib');

prompt(questions).then(genLogo);