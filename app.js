const p1ScoreText = document.querySelectorAll('span')[0];
const p2ScoreText = document.querySelectorAll('span')[1];
const p1BtnScore = document.querySelector('#btn1');
const p2BtnScore = document.querySelector('#btn2');
const resetBtn = document.querySelector('#btn3');
const winningScoreSel = document.querySelector('select');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;


p1BtnScore.addEventListener('click', function(){

    if (!isGameOver){
        p1Score ++;

        if(p1Score === winningScore){
            isGameOver = true;
            p2ScoreText.classList.add('text-danger');
            p1ScoreText.classList.add('text-success');
        }
        p1ScoreText.innerText = p1Score;
    }

    
})

p2BtnScore.addEventListener('click', function(){

    if (!isGameOver){
        p2Score ++;

        if(p2Score === winningScore){
            isGameOver = true;
            p1ScoreText.classList.add('text-danger');
            p2ScoreText.classList.add('text-success');
        }
        p2ScoreText.innerText = p2Score;
    }
    
})



winningScoreSel.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset);

function reset(){

    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1ScoreText.innerText = 0;
    p2ScoreText.innerText = 0;
    p1ScoreText.classList.remove('text-danger','text-success');
    p2ScoreText.classList.remove('text-success','text-danger');
}
