// Shows the login modal when Reserve is clicked
function showbox(bookTitle) {
    var box = document.getElementById('accountbox');
    var boxmessage = document.getElementById('boxmessage');  
  // Combines text and variables using standard quotes and plus signs
  boxmessage.textContent = 'You must create an account to reserve books.';
  
  // Changes CSS display from 'none' to 'flex' to make it visible
  box.style.display = 'flex';
}

// Hides the login modal
function hidebox() {
  var box = document.getElementById('accountbox');

  // Changes CSS display back to 'none' to hide it
  box.style.display = 'none';
}

// Live search filter
function filterBooks() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var bookList = document.getElementById('bookList');
  var books = bookList.getElementsByTagName('li');
  var noMatchMessage = document.getElementById('noMatchMessage');

  var hasMatch = false;

  for (var i = 0; i < books.length; i++) {
    var bookText = books[i].textContent.toLowerCase();
    
    if (bookText.indexOf(input) > -1) {
      books[i].style.display = '';
      hasMatch = true;
    } else {
      books[i].style.display = 'none';
    }
  }
  if (hasMatch) {
    noMatchMessage.style.display = 'none';
  } else {
    noMatchMessage.style.display = 'block';
  }
}