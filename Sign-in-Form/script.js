// const signupLink = document.getElementById("signup-link");
// const signupFormContainer = document.getElementById("signup-form-container");
// const signinForm = document.getElementById("signin-form");

// signupLink.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	signupFormContainer.innerHTML = `
//         <form style="background-color: red;">
//             <label for="user">Username:</label>
//             <input type="text" id="user" name="user">

//             <label for="password">Password:</label>
//             <input type="password" id="password" name="password">

//             <label for="email">Email:</label>
//             <input type="email" id="email" name="email">

//             <button type="submit" style="background-color: red;" id="submit">Submit</button>
//         </form>
//     `;

// 	signinForm.style.display = "none";
// 	signupFormContainer.style.display = "block";
// });

const submitButton = document.getElementById("submit");
const successMessage = document.getElementById("success-message");

submitButton.addEventListener("click", (e) => {
	e.preventDefault();
	// validate form
	// send data to server
	// handle response from server
	successMessage.innerHTML = "Welcome Back!";
	successMessage.style.display = "block";
});
