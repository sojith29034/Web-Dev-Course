import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// var qr = require('qr-image');

const questions = [
  {
    type: 'input',
    name: 'link',
    message: "Input Link: ",
  },
];

var n = 0;

// method 1 - output: The entered link is: https://semp2324.000webhostapp.com/
inquirer.prompt(questions).then((answers) => {
  const url = answers.link;
  var qr_png = qr.image(url);
  qr_png.pipe(fs.createWriteStream('qrImg.png')); 

  var text = ++n + ". " + url + "\n";
  fs.appendFile("urls.txt", text, (err) => {
    if (err) throw err;
    console.log("File saved.");
  })
});

