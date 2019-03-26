//question and answer key
const quiz = [
      ['What is Superman\'s real name?', 'clark kent'],
      ['What is Wonder Woman\'s real name', 'diana prince'],
      ['What is Batman\'s real name?', 'bruce wayne']
];

//initialize score
let score = 0;

//welcome notice
alert('Welcome to Questionable')

//quiz loop
for(const [question, answer] of quiz) {
  const response = prompt (question).toLowerCase();
  if(response === answer) {
    alert('Correct!');
    score+=1;
  } else {
    alert('Wrong! The correct answer was ' + answer);
  }
}
//notify user of score
alert ('Game Over, you answered ' + score + ' correct');
