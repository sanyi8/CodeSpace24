// JavaScript to evaluate password strength
document
  .getElementById("exampleInputPassword1")
  .addEventListener("input", function () {
    const password = this.value;
    const progress = document.querySelector(".progress-bar");
    const label = document.querySelector(".password-label");

    if (password.length < 6) {
      progress.style.width = "33%";
      progress.setAttribute("aria-valuenow", "33");
      progress.classList.remove("password-medium", "password-strong");
      progress.classList.add("password-weak");
      label.textContent = "Weak";
    } else if (password.length >= 6 && password.length < 10) {
      progress.style.width = "66%";
      progress.setAttribute("aria-valuenow", "66");
      progress.classList.remove("password-weak", "password-strong");
      progress.classList.add("password-medium");
      label.textContent = "Medium";
    } else {
      progress.style.width = "100%";
      progress.setAttribute("aria-valuenow", "100");
      progress.classList.remove("password-weak", "password-medium");
      progress.classList.add("password-strong");
      label.textContent = "Strong";
    }
  });
