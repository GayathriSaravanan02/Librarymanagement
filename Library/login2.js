const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

function signIn() {
  // Get the input values
  const username = document.querySelector(".sign-in-form input[type='text']").value;
  const password = document.querySelector(".sign-in-form input[type='password']").value;
  
  // Your login logic here...
  if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to another page or perform other actions...
  } else {
      alert("Invalid username or password");
  }
}

document.querySelector(".sign-in-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  signIn(); // Call the signIn function
});
