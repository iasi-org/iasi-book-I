document.addEventListener("DOMContentLoaded", () => {
  if (window.self !== window.top) {
    const banner = document.getElementById("quarto-announcement");
    if (banner) banner.style.display = "none";
    
    const link = document.querySelector('a[href$="#iasi-open-external"]');
    if (link) {
        link.classList.remove("iasi-hidden");

        link.addEventListener("click", function (event) {
             event.preventDefault();
             window.open(window.location.href, "_blank", "noopener");
        });
    }
  }
});

