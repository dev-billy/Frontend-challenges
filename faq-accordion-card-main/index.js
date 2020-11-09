const question1 = document.getElementById('question1');
const answer1 = document.getElementById('answer1');
const question2 = document.getElementById('question2');
const answer2 = document.getElementById('answer2');
const question3 = document.getElementById('question3');
const answer3 = document.getElementById('answer3');
const question4 = document.getElementById('question4');
const answer4 = document.getElementById('answer4');
const question5 = document.getElementById('question5');
const answer5 = document.getElementById('answer5');

const answers = [answer1,answer2,answer3,answer4,answer5];

[question1,question2,question3,question4,question5].forEach(item=>{
    
    item.addEventListener('click',()=>{
        const itemId = item.getAttribute('id').substr(8,8) -1;        
        showAnswer(answers[itemId],item);
    })
})



function showAnswer(answer,question){
    console.log(answer)
    if(answer.style.display==='block'){
        answer.style.display='none'
        question.childNodes[1].style.fontWeight = 400;
        question.childNodes[1].classList.remove('active');
        question.childNodes[3].style.transform = 'rotate(0deg)';
        
    }else{
        answer.style.display='block'
        question.childNodes[1].style.fontWeight = 700;
        question.childNodes[1].classList.remove('active');
        question.childNodes[3].style.transform = 'rotate(180deg)';
    }
}