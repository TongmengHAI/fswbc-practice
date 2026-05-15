const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Login form submitted successfully!";
    message.style.color = "green";
  }
});