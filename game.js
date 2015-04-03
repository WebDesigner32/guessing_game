
  (function() {
  var answer = 4200;
  function User (name, age) {
    this.name = name;
    this.age = age;
    this.speak = function () {
      console.log(this.name + ' says ' + message);
      console.log('I am ' + this.age + ' years old.');
    }
  }

  var bob = new User;
    bob.name = prompt('What is your name?');
    bob.age = prompt('What is your age?');

  var guess = prompt('Guess the lengthy number. Good luck!');
    guess = Number.parseInt(guess);
    while (true) {
      if (guess === answer) {
        var firstAlert = document.getElementById('correct');
        firstAlert.textContent = 'You got it right! You should feel pretty good.';
        break;
      } else if (guess < answer) {
        guess = Number.parseInt(prompt('Too low, guess again. Sorry, this might take awhile.'));
      } else if (guess > answer) {
        guess = Number.parseInt(prompt('Too high, guess again. Sorry, this might take awhile.'));
      }

    }

   })();






