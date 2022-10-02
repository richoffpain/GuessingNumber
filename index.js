'use strict';

let score = document.querySelector('.score').textContent=20;
const randomNumber = Math.trunc(Math.random() * 20) +1;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if(!guess){
       document.querySelector('.message').textContent = 'Please enter a number'; 
    }
    else if(guess === randomNumber){
       
        document.querySelector('.message').textContent = 'Correct number ⭐⭐⚡✅'; 
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if(guess !== randomNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > randomNumber ? 'Number too high' : 'Number too low'; 
            score--;
            document.querySelector('.score').textContent = score;

            }
            else{
                document.querySelector('.message').textContent = 'Game Over🙈';
                document.querySelector('.score').textContent = 0;
     
            }
        }
            /*
    else if(guess > randomNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Number too high'; 
            score--;
            document.querySelector('.score').textContent = score;

        }
        else{
            document.querySelector('.message').textContent = 'Game Over🙈';
            document.querySelector('.score').textContent = 0;
 
        }
       
    }
    else if(guess < randomNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Number too low'; 
        score--;
            document.querySelector('.score').textContent = score;

        }
        else{
            document.querySelector('.message').textContent = 'Game Over🙈'; 
            document.querySelector('.score').textContent = 0;
        }
       
       
    }
    */
});

document.querySelector('.again').addEventListener('click', function(){
     score = document.querySelector('.score').textContent=20;


 document.querySelector('.message').textContent = 'Start Guessing';
 document.querySelector('.score').textContent = score;
 document.querySelector('.number').textContent = '?';
 document.querySelector('.guess').value = '';

 document.querySelector('body').style.backgroundColor = '#222';
 document.querySelector('.number').style.width = '15rem';
 
});