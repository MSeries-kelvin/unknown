const mainOverlayContainer = document.getElementById("main_overlay_container");
const registerButton = document.getElementById("register_button");
const loginButton = document.getElementById("login_button");

registerButton.addEventListener("click", async () => {
    const validationResults = validateRegistrationInfo();
    if (validationResults[0]) {
        const validatedData = validationResults[1];
        
        // const url = "http://localhost:8000/api/auth/register";
        const url = "https://unknown-backend.onrender.com/api/auth/register";
        const requestBody = JSON.stringify({
            name: validatedData.name,
            phoneNumber: validatedData.phoneNumber,
            password: validatedData.password
        });

        fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: requestBody
        })
            .then((response) => console.log(response.json()))
            .catch((error) => console.error(`Error: ${error}`));
    }
});

function validateRegistrationInfo() {
    // collects and check if all registration field data
    // are valid or up to code.
    // (array) return true and validated data (object) if valid and up to code 
    // (array) else return false and null

    const nameHolder = document.getElementById("name");
    const phoneNumberHolder = document.getElementById("registerPhoneNumber");
    const passwordHolder = document.getElementById("registerPassword");
    const confirmPasswordHolder = document.getElementById("confirmPassword");
    const name = nameHolder.value;
    const phoneNumber = phoneNumberHolder.value;
    const password = passwordHolder.value;
    const confirmPassword = confirmPasswordHolder.value;

    nameHolder.value = "";
    phoneNumberHolder.value = "";
    passwordHolder.value = "";
    confirmPasswordHolder.value = "";

    return [true, { name: name, phoneNumber: phoneNumber, password: password }];
}

loginButton.addEventListener("click", async () => {
    const validationResults = validateLoginInfo();

    if (validationResults[0]) {
        const validatedData = validationResults[1];
        
        // const url = "http://localhost:8000/api/auth/login";
        const url = "https://unknown-backend.onrender.com/api/auth/login";
        const requestBody = JSON.stringify({
            phoneNumber: validatedData.phoneNumber,
            password: validatedData.password
        });

        fetch(url, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: requestBody
        })
        .then(async (response) => {   
            if (response.status !== 200) return alert("Invalid credentials");
            
            const { user } = await response.json();
            console.log(user);
            alert(`You're logged in: ${user.name}`);
            
            // hide login holder
            mainOverlayContainer.style.display = "none";
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
});

function validateLoginInfo() {
    // collects and check if all login field data
    // are valid or up to code.
    // (array) return true and validated data (object) if valid and up to code 
    // (array) else return false and null

    const phoneNumberHolder = document.getElementById("phoneNumber");
    const passwordHolder = document.getElementById("password");
    const phoneNumber = phoneNumberHolder.value;
    const password = passwordHolder.value;

    // alert(phoneNumber + password);
    phoneNumberHolder.value = "";
    passwordHolder.value = "";
    
    return [true, { phoneNumber: phoneNumber, password: password }];
}


// change between register and login screen
const showLoginSectionButton = document.getElementById("show_login_section");
const showRegisterSectionButton = document.getElementById("show_register_section");
const loginForm = document.getElementById("login_form");
const registerForm = document.getElementById("register_form");


showLoginSectionButton.addEventListener("click", () => {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    mainOverlayContainer.style.display = "block";
});

showRegisterSectionButton.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    mainOverlayContainer.style.display = "block";
});