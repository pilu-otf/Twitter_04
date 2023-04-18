// import "modern-css-reset";
// import "./../assets/styles/tailwind.css";
import "./../assets/styles/main.sass";

import "phosphor-icons";
import { renderAllTweets, searchInputController } from "./controllers/searchFilter.controller";
import { newTweetController } from "./controllers/newTweet.controller";
console.log("hola");

window.addEventListener ("load", () => {
  searchInputController()
  renderAllTweets()
  newTweetController()
});

function addData() {
  const inputText=document.getElementById("mensaje").value;
  const dataObj = {
    foto: "./assets/images/fotoUsuario1.jpg",
      nombre: "Me",
      username: "@me",
      hora: "now",
      mensaje: inputText,
      likes: [
      ],
      retweets: [
      ],
      comentarios: [
      ],
      liked: true
  };
  tweets.push(dataObj);
  console.log(tweets);
}

let menuToggle= document.querySelector('.button_tweet');

menuToggle.addEventListener("click", () => {
addData();
renderAllTweets();
});

const textarea = document.getElementById ('mensaje');

textarea.addEventListener('input', function(){
  const maxChar = 5;
  if (textarea.value.length > maxChar) {
    textarea.style.color = 'red';
  } else {
    textarea.style.color = 'white';
  }
});



