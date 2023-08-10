// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('click', function(event){
  console.log('click event detected on empty heart:', event.target);
  if(event.target.classList.contains('like-glyph') && event.target.innerText === EMPTY_HEART){
    mimicServerCall()
    .then(function(response){
      console.log('server response', response)
      event.target.innerText = FULL_HEART;
      event.target.classList.add('activated-heart');
    })
    .catch(function(error){
      console.log('error', error)
      const errorModal = document.querySelector('#modal');
      errorModal.classList.remove('hidden');
      const errorMessage = document.querySelector('#modal-message');
      errorMessage.innerText = error;
    });
  } else if(event.target.innerText = FULL_HEART){
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  }
})

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
