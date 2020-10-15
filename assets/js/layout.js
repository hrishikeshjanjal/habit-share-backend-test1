//searching a habit functionality
function search() {
  let ip = document.getElementById("searchbar").value;
  ip = ip.toLowerCase();
  let arr = document.getElementsByClassName("habit");

  //storing them(habits) in array and iterating over it
  for (i = 0; i < arr.length; i++) {
    if (!arr[i].innerHTML.toLowerCase().includes(ip)) {
      arr[i].style.display = "none";
    } else {
      arr[i].style.display = "list-item";
    }
  }
}
