// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeGlyphCollection = document.getElementsByClassName('like-glyph');

// Your JavaScript code goes here!

function likeAction(clickEvent){
  console.log('click event detected on empty heart:', clickEvent.target);
  if(clickEvent.target.innerText === EMPTY_HEART){
    mimicServerCall()
    .then(function(response){
      console.log('server response', response)
      clickEvent.target.innerText = FULL_HEART;
      clickEvent.target.classList.add('activated-heart');
    })
    .catch(function(error){
      console.log('error', error)
      const errorModal = document.querySelector('#modal');
      errorModal.classList.remove('hidden');
      const errorMessage = document.querySelector('#modal-message');
      errorMessage.innerText = error;

      setTimeout(function(){
        errorModal.classList.remove('hidden');
      }, 3000);
    });
  } else if(clickEvent.target.innerText === FULL_HEART){
    clickEvent.target.innerText = EMPTY_HEART;
    clickEvent.target.classList.remove('activated-heart');
  }
}

for(let glyph of likeGlyphCollection){
  glyph.addEventListener('click', likeAction);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
