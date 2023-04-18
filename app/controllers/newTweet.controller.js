//import "./../assets/styles/main.sass";
// import "phosphor-icons";
//import { renderAllTweets, searchInputController } from "./controllers/searchFilter.controller";

const tweetFormButton = document.querySelector(".tweet_form .button")
const tweetFormTextarea = document.querySelector(".tweet_form textarea")

const newTweetController = () => {
  tweetFormButton.addEventListener("click", () => {
  const newTweet = {
    foto: "./assets/images/fotoUsuario1.jpg",
    nombre: "Pilar Redilla",
    username: "@pilu_otf",
    hora: "20 min",
    mensaje: tweetFormTextarea.value,
    likes: [
        "3tg",
        "amaia",
        "yenesi",
        "gottmik"
    ],
    retweets: [
        "gottmik",
        "yenesi"
    ],
    comentarios: [
        "yass",
        "slayy"
    ]
};
  tweets.push(newTweet);
  newTweetController();
  tweetFormTextarea.value = ""
}); 
};

