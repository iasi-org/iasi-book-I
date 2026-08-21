if (window.self !== window.top) {
  const announcement = document.getElementById("quarto-announcement");

  if (announcement) announcement.classList.add("iasi-hidden");

  document.addEventListener("DOMContentLoaded", function () {
    const link = document.querySelector('a[href$="#iasi-open-external"]');

    if (!link) return;

    link.classList.remove("iasi-hidden");

    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.open(window.location.href, "_blank", "noopener");
    });
  });
}