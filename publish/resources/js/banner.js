document.addEventListener("DOMContentLoaded", () => {
  if (window.self !== window.top) {
    document.documentElement.classList.add("iasi-embedded");

    const link = document.querySelector('a[href$="#iasi-open-external"]');

    if (link) {
        link.addEventListener("click", function (event) {
             event.preventDefault();
              window.open(window.location.href, "_blank", "noopener");
        });
    }
  }
});