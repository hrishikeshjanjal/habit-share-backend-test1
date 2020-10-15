// fetching year month
let month = moment().format("MMMM YYYY");
document.getElementById("month-name").innerText = month;

// weekdays displayed
var wd = document.getElementsByClassName("day-name");
for (let i = 0; i < wd.length; i++) {
  if (i == 0) {
    wd[i].innerText = "Today/" + moment().subtract(i, "dd").format("Do");
    wd[i].style.fontWeight = "700";
  } else {
    wd[i].innerText = moment().subtract(i, "dd").format("ddd/Do");
  }
}

let dd = document.getElementsByClassName("dd");
dd[0].style.fontWeight = "700";
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
    dd[i].style.backgroundColor = "rgb(240, 110, 100)";
  } else if (dd[i].innerText == "yes") {
    dd[i].innerText = "";
    icon.classList.add("fa-check");
    dd[i].appendChild(icon);
    text.innerText = "Done ";
    text.appendChild(icon);
    dd[i].appendChild(text);
    dd[i].style.backgroundColor = "rgb(60, 200, 110)";
  } else {
    dd[i].innerText = "";
    icon.classList.add("fa-exclamation");
    dd[i].appendChild(icon);
    text.innerText = "Pending ";
    text.appendChild(icon);
    dd[i].appendChild(text);
    dd[i].style.backgroundColor = "rgb(110, 110, 102)";
  }
}
