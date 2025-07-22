  const menu = document.getElementById("icon-menu");
  const nav = document.getElementById("menu-mobile");
  const close = document.querySelector(".icon-close");
  const lista = document.querySelectorAll("li")

  menu.onclick = function () {
    nav.style.display = "block";
  };

  close.onclick = function () {
    nav.style.display = "none";
  };

  lista.onclick = function () {
    nav.style.display = "none";
  };

  