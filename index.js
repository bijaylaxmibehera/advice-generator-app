const adviceId=document.querySelector("#adviceId");
const adviceText=document.querySelector("#advice-text");
const gererateBtn=document.querySelector("#dice-btn");


function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response=>response.json())
    .then(adviceData=>{
        const currentAdviceId=adviceData.slip.id;
        adviceId.innerText=currentAdviceId;
        const currentAdvice=adviceData.slip.advice;
        adviceText.innerHTML=`<p>"${currentAdvice}"</p>`
    })
    .catch(error=>{
        console.log(error)
    })
}

gererateBtn.addEventListener("click", getAdvice);

window.onload(getAdvice())