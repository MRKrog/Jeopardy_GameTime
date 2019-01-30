export default {
  // All Changes that are being made to the DOM go here

  getUserInput: function() {
    var playerOneInput = document.querySelector('#box-height-display').innerText = newHeight;
    return playerOneInput; // 'The answer is Gabe'
  },

  displayHeight: function(newHeight) {
    document.querySelector('#box-height-display').innerText = newHeight;
  },

  displayWidth: function() {

  }

}
