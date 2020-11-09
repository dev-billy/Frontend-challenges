const question = document.getElementById('question1');
const answer = document.getElementById('answer1');


question.addEventListener('click', ()=>{
    showAnswer();
})


function showAnswer(){
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