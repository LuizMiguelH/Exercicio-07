  const menu = document.getElementById("icon-menu");
  const nav = document.getElementById("menu-mobile");
  const close = document.querySelector(".icon-close");
  const lista = document.querySelectorAll("li")
  const mobileLinks = document.querySelectorAll("#menu-mobile ul li a");

  menu.onclick = function () {
    nav.style.display = "block";
  };

  close.onclick = function () {
    nav.style.display = "none";
  };

  lista.onclick = function () {
    nav.style.display = "none";
  };

  mobileLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const destino = link.getAttribute("href");

      nav.style.display = "none";

      setTimeout(() => {
        window.location.href = destino;
      }, 100);
    });
  });