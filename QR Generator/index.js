import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'link',
    message: "Input Link: ",
  },
];

// method 1 - output: The entered link is: https://semp2324.000webhostapp.com/
inquirer.prompt(questions).then(answers => {
  console.log(`The entered link is: ${answers.link}`);
});

// method 2 - output: The entered link is:  { link: 'https://semp2324.000webhostapp.com/' }
inquirer.prompt(questions).then(answers => {
  console.log(`The entered link is: `,(answers));
});
