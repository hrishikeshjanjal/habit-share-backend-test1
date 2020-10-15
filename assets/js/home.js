// habit done
let dd = document.getElementsByClassName("btn-change-status");
for (let i = 0; i < dd.length; i++) {
  dd[i].style.color = "white";
  let icon = document.createElement("i");
  icon.classList.add("fa");
  let text = document.createElement("span");
  if (dd[i].innerText == "no") {
    dd[i].innerText = "";
    icon.classList.add("fa-times");
    dd[i].appendChild(icon);
    text.innerText = "Not Done ";
    text.appendChild(icon);
    dd[i].appendChild(text);
    dd[i].style.backgroundColor = "rgb(242, 118, 109)";
  } else if (dd[i].innerText == "yes") {
    dd[i].innerText = "";
    icon.classList.add("fa-check");
    dd[i].appendChild(icon);
    text.innerText = "Done ";
    text.appendChild(icon);
    dd[i].appendChild(text);
    dd[i].style.backgroundColor = "rgb(69, 204, 105)";
  } else {
    dd[i].innerText = "";
    icon.classList.add("fa-exclamation");
    dd[i].appendChild(icon);
    text.innerText = "Pending ";
    text.appendChild(icon);
    dd[i].appendChild(text);
    dd[i].style.backgroundColor = "rgb(110, 117, 112)";
  }

  console.log(dd[i]);
}

//adding event listeners to hide and show a habit functionality
// Hide a habit
document.getElementById("cancel-habit").addEventListener("click", function () {
  document.getElementById("add-habit-form").style.display = "none";
  document.getElementById("btn-add-habit").style.display = "block";
  document.getElementById("btn-streak").style.display = "block";
});

//Show new Habit form
document.getElementById("btn-add-habit").addEventListener("click", function () {
  document.getElementById("add-habit-form").style.display = "block";
  document.getElementById("btn-add-habit").style.display = "none";
  document.getElementById("btn-streak").style.display = "none";
});
