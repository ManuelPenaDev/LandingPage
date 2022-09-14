(function(){
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        titleQuestions.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions_padding--add');
            questions.children[0].classList.toggle('questions_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
             answer.style.height = `${height}px`;

        });

    });


})();