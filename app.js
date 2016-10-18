const prompt = require('prompt');
const colors = require('colors');

var board = [
  [' ', ' ', ' '], 
  [' ', ' ', ' '], 
  [' ', ' ', ' ']
];

var user1 = {
};

var user2 = {
};


prompt.message = colors.rainbow('Question!');
prompt.delimiter = colors.green('><');

var finish = false;

prompt.start();

prompt.addProperties(user1, [{
  name: 'name',
  description: colors.red('User 1: what is your name?')
}], (err, res) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log(' username: ', res.name);
    console.dir(user1);
    
    prompt.addProperties(user2, [{
      name: 'name',
      description: colors.red('User 2: what is your name?')
    }], (err, res) => {
      if (err) {
        console.log('Error: ', err);
      } else {
        console.log(' username: ', res.name);
        console.dir(user2);
        userInput(1);
      }
    });
  }
}); 

var userInput = (user) => {
  prompt.get([{
    name: 'coord',
    type: 'integer',
    required: true,
    description: colors.red('User ' + user + ' input x coordinate')
  }], (err, resX) => {
    if (err) {
      console.log('Error:', err);
    } else {
      prompt.get([{
        name: 'coord',
        type: 'integer',
        required: true,
        description: colors.red('User ' + user + ' input y coordinate')
      }], (err, resY) => {
        if (err) {
          console.log('Error:', err);
        } else {
          board[resY.coord][resX.coord] = user === 1 ? 'O' : 'X';
          console.log(' _____\n|' + board[0] + '|\n|' + board[1] + '|\n|' + board[2] + '|\n =====');
          userInput(user === 1 ? 2 : 1);
        }
      });
    }
  });
};
