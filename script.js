document.addEventListener("DOMContentLoaded", function () {

  console.log("JS loaded successfully");

  const footer = document.createElement("footer");
  footer.style.textAlign = "center";
  footer.style.marginTop = "40px";
  footer.style.fontSize = "14px";

  const year = new Date().getFullYear();
  footer.textContent = "© " + year + " Talluri Bhagyasree | Student Portfolio";

  document.body.appendChild(footer);


  const contact = document.querySelector(".contact");

  if (contact) {
    contact.style.cursor = "pointer";

    contact.addEventListener("click", function (event) {
      const text = event.target.innerText;

      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

      const githubRegex = /https:\/\/github\.com\/[^\s]+/;

      if (emailRegex.test(text)) {
        const email = text.match(emailRegex)[0];
        navigator.clipboard.writeText(email);
        alert("Email copied!");
      } 
      else if (githubRegex.test(text)) {
        const github = text.match(githubRegex)[0];
        navigator.clipboard.writeText(github);
        alert("GitHub link copied!");
      }
    });
  }

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌙";

  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.padding = "10px 12px";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.fontSize = "18px";

  document.body.appendChild(toggleBtn);

  let darkMode = false;

  toggleBtn.addEventListener("click", function () {
    darkMode = !darkMode;

    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
      toggleBtn.textContent = "☀️";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      toggleBtn.textContent = "🌙";
    }
  });

});