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