document.addEventListener("DOMContentLoaded", function () {
  if (window.self === window.top) return;

  const announcement = document.getElementById("quarto-announcement");
  const link = document.querySelector('a[href$="#iasi-open-external"]');

  if (announcement) announcement.classList.add("iasi-hidden");

  if (link) {
    link.classList.remove("iasi-hidden");

    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.open(window.location.href, "_blank", "noopener");
    });
  }
});
