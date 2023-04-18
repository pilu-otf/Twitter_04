// import tweets from "../tweets"

let searchInput = document.querySelector('.search input')
const tweetsBlock = document.querySelector (".tweets")
    

export const searchInputController = () => {
  searchInput.addEventListener("keyup", (ev) =>{
  const searchInputValue = searchInput.value
  const searchInputLength = searchInputValue.length
  if (searchInputLength <= 1) {
    renderAllTweets()
  } else {
    }
    const filteredTweets = tweets.filter(tweet =>
      tweets.mensaje.includes(searchInputValue))

    if (filteredTweets.length>0) {
      renderFilteredTweets(filteredTweets);
    } else {
      renderNoTweets();
    }});  
}


export const renderAllTweets = () => {
let tweetsString = ""
for (let i = 0; i < tweets.length; i++) {
  tweetsString += `
  <div class="tweet ${tweets[i].liked ? "liked": ""}" id="tweet">

          <div class="tweet_content_header">
            <div class="user_photo">
              <img src="${tweets[i].foto}" alt="${tweets[i].nombre}">

            </div>
            <div class="name"><strong>${tweets[i].nombre}</strong></div>
            <div class="user_name">${tweets[i].username}</div>
            <div class="date">· 2h</div>
          </div>

          <div class="tweet_content_body">
          ${tweets[i].mensaje}
          </div>

          <div class="tweet_content_footer">
            <div class="tweet_icon responder">

              <div class="icon">

                <svg>
                  <path
                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                    fill="#606060"></path>
                </svg>
              </div>
              <div class="contador">${tweets[i].likes.length}</div>
            </div>
            <div class="tweet_icon retweet">

              <div class="icon">
                <svg>
                  <path
                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                    fill="#606060"></path>
                </svg>
              </div>
              <div class="contador">${tweets[i].retweets.length}</div>
            </div>
            <div class="tweet_icon like">

              <div class="icon">
                <svg>
                  <path
                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    fill="#606060"></path>
                </svg>
              </div>
              <div class="contador">${tweets[i].comentarios.length}</div>
            </div>
          </div>

        </div>
  `
};
 tweetsBlock.innerHTML = tweetsString
}

renderAllTweets()

const renderFilteredTweets = (filteredTweets) => {
  let html = ""
filteredTweets.forEach((tweet) => {
  html += `
  <div class="tweet ${tweets.liked ? "liked": ""}" id="tweet">

          <div class="tweet_content_header">
            <div class="user_photo">
              <img src="${tweets.foto}" alt="${tweets.foto}">

            </div>
            <div class="name"><strong>${tweets.nonmbre}</strong></div>
            <div class="user_name">${tweets.username}</div>
            <div class="date">· 2h</div>
          </div>

          <div class="tweet_content_body">
          ${tweets.mensaje}
          </div>

          <div class="tweet_content_footer">
            <div class="tweet_icon responder">

              <div class="icon">

                <svg>
                  <path
                    d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                    fill="#606060"></path>
                </svg>
              </div>
              <div class="contador">${tweets.likes}</div>
            </div>
            <div class="tweet_icon retweet">

              <div class="icon">
                <svg>
                  <path
                    d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                    fill="#606060"></path>
                </svg>
              </div>
              <div class="contador">${tweets.retweets}</div>
            </div>
            <div class="tweet_icon like">

              <div class="icon">
                <svg>
                  <path
                    d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    fill="#606060"></path>
                </svg>
              </div>
              <div class="contador">${tweets.comentarios}</div>
            </div>
          </div>

        </div>
  `
});
 tweetsBlock.innerHTML = html
}

const renderNoTweets = () => {
  tweetsBlock.innerHTML = html`
    <h3>No hay tweets</h3>
  `
}