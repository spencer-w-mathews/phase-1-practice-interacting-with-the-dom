const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const display = document.querySelector("#counter");
const like = document.querySelector("#heart");
const likes = document.querySelector(".likes");
const pause = document.querySelector("#pause");
const comment = document.querySelector("#comment-input")
const submit = document.querySelector("#submit")
const commentInput = document.querySelector("input")

const myInterval = setInterval(countUp,1000);

plus.addEventListener("click", countUp);

minus.addEventListener("click", countDown);

like.addEventListener("click", addLikes)

pause.addEventListener("click", pauseDisplay)

submit.addEventListener("click", addComments)


function countUp(){
    return display.innerHTML++
}

function countDown(){
    return display.innerHTML--
}

function addLikes(){
    const node = document.createElement("li");
    const likeText = document.createTextNode(`${display.innerHTML} was liked`);
    node.appendChild(likeText);
    return likes.appendChild(node)
}


function pauseDisplay(){
    if (pause.innerHTML=== " pause "){
    const pauser = setTimeout(clearInterval(myInterval, 100));
    pause.innerHTML = "restart";
    } else if(pause.innerHTML=== "restart"){
        clearTimeout(setTimeout(clearInterval(myInterval, 100)))
    }
}

function addComments(event){
    const node = document.createElement("p");
    const commentText = document.createTextNode(`${commentInput.value}`);
    node.appendChild(commentText);
    event.preventDefault()
    commentInput.value = ""
    return document.querySelector("h3").appendChild(node)
}