// OPens the modal popup
function openBox() {
    document.getElementById('popBox').style.display = "flex";
}

// Close the modal popup
function closeBox() {
  document.getElementById('popBox').style.display = "none";
}

// Switch between Login and Sign In
function setTab(mode) {
  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  const nameRow = document.getElementById("nameRow");
  const idRow = document.getElementById("idRow");
  const popTitle = document.getElementById("popTitle");
  const popText = document.getElementById("popText");
  const mainBtn = document.getElementById("mainBtn");

  if (mode === "login") {
    tab1.classList.add("active");
    tab2.classList.remove("active");
    nameRow.style.display = "none";
    idRow.style.display = "none";
    popTitle.innerText = "Welcome Back";
    popText.innerText = "Sign In to access your reserved library items.";
    mainBtn.innerText = "Log In";
  }
  else {
    tab2.classList.add("active");
    tab1.classList.remove("active");
    nameRow.style.display = "block";
    idRow.style.display = "block";
    popTitle.innerText = "Student Account Required";
    popText.innerText = "Create a student account to reserve books.";
    mainBtn.innerText = "Create Student Account";
  }
}
let isLoggedIn = false;

function handleAuth(event) {
  event.preventDefault();
  const nameInput = document.querySelector("#nameRow input");
  const studentName = nameInput && nameInput.value.trim() ? nameInput.value : "Student";

  //modifying the header link to a more user dashboard-like view 
  document.getElementById("signInBtn").style.display= "none";
  document.getElementById("createAccountBtn").style.display= "none";
  
  //Display the greeting view
  const greeting = document.getElementById("userGreeting");
  greeting.innerText = "Hi, " + studentName;
  greeting.style.display = "inline-block";
  
  isLoggedIn= true;
  closeBox();
}
function handleLogout(event) {
  event.preventDefault();

  //Hide the greeting view
  const greeting = document.getElementById("userGreeting");
  greeting.innerText = "";
  greeting.style.display = "none";

  //Show the signin and create account tabs again
  document.getElementById("signInBtn").style.display= "inline-block";
  document.getElementById("createAccountBtn").style.display= "inline-flex";
  
  isLoggedIn = false
  closeBox();
}

function handleReserveClick(buttonElement) {
  if (!isLoggedIn) {
    openBox();
    setTab();
    return;
  } else {
    if (buttonElement.innerHTML === "Reserved") {
      buttonElement.innerHTML = "&#128274 Reserve";
      buttonElement.style.backgroundColor ="";
    }
    else {
      buttonElement.innerHTML= "Reserved";
      buttonElement.style.backgroundColor ="#28a7545";
    }
  }
}

function searchBooks() {
  //accepting input from search bar
  const text= document.getElementById("searchInput").value.toLowerCase();
  const book= document.querySelectorAll(".book-card");
  const noMatch= document.getElementById("noMatch");
  let foundMatch= false;

  //Hide or show each book
  book.forEach(book => {
    const title = book.querySelector("h3").innerText.toLowerCase();
    if (title.includes(text)){
    book.style.display = "";
    foundMatch = true;
    } else {
    book.style.display = "none";
    }
  });

  if(foundMatch) {
    noMatch.style.display = "none";
  } else {
    noMatch.style.display = "block";
  }
}