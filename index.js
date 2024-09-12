const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
let selected= "happy";


container1.addEventListener("click",(one)=>{
    if(one.target.parentNode.classList.contains("rating")){
        console.log(one.target.parentNode.classList.contains("rating"));

        removeActive();
        one.target.parentNode.classList.add("active");
        selected = one.target.nextElementSibling.innerHTML;
    }
});

btn.addEventListener("click",()=>{
    container1.innerHTML=`
         <strong>Thank you 👀 for u'r feedback</strong>
        <div class="container2">
            <div class="rating">
                <h3>${selected}</h3>
                <a class="back icon" href="index.html">returnBack</a><
            </div>

        </div>`
});



function removeActive(){
    for(let l=0; l<ratings.length; l++){
        ratings[l].classList.remove("active");
    }
}