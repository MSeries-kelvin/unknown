const mainOverlayContainer = document.getElementById("main_overlay_container");
const registerButton = document.getElementById("register_button");
const loginButton = document.getElementById("login_button");
const loaderView = document.getElementById("loader_view");

registerButton.addEventListener("click", async () => {
    loaderView.style.display = "grid";
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
            .then(() => loaderView.style.display = "none")
            .then(() => showLoginSection())
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
    loaderView.style.display = "grid";
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
            // alert(`You're logged in: ${user.name}`);
            
            // hide login holder
            closeLoginForm();
            setTimeout(() => {
                loaderView.style.display = "none";
                notAuthenticatedView.style.display = "none";
            }, 200);
            setTimeout(displayNotification, 2000);
            setTimeout(() => {
                mainOverlayContainer.style.display = "none";
            }, 3000);
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

const closeLoginFormBtn = document.getElementById("close_login_form");
const closeRegisterFormBtn = document.getElementById("close_register_form");
const notAuthenticatedView = document.getElementById("not_authenticated_home");

showLoginSectionButton.addEventListener("click", showLoginSection);
function showLoginSection() {
    registerForm.style.display = "none";
    loginForm.style.display = "block";
    notAuthenticatedView.style.display = "none";
}

showRegisterSectionButton.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    notAuthenticatedView.style.display = "none";
});

closeRegisterFormBtn.addEventListener("click", () => {
    registerForm.style.display = "none";
    notAuthenticatedView.style.display = "flex";
});

closeLoginFormBtn.addEventListener("click", closeLoginForm);
async function closeLoginForm() {
    loginForm.style.display = "none";
    notAuthenticatedView.style.display = "flex";
}




// notification_bar_view
// display: flex;
const notificationBarView = document.getElementById("notification_bar_view");
const closeNotificationBarBtn = document.getElementById("remove_notification");
const notificationLoader = document.getElementById("notification_loader");

closeNotificationBarBtn.addEventListener("click", closeNotificationBar);
function closeNotificationBar() {
    // temperary id
    const notification = document.getElementById("notification1");
    notification.style.display = "none";
    notificationBarView.style.display = "none";
}

function displayNotification() {
    // all things needed will be passed as a parameter
    const notification = document.getElementById("notification1");

    notification.style.display = "block";
    notificationBarView.style.display = "flex";

    let time = 1000;

    // try to make a loader that runs for 2 secs
    let loaderInterval = setInterval(() => {
        if (time == 0) clearInterval(loaderInterval);
        time = time - 10;
        notificationLoader.style.width = `${calculatePercent()}%`;
    }, 30);

    setTimeout(closeNotificationBar, 4000);

    function calculatePercent() {
        // 2000 = 100%
        // 1980 = x
        // 2000x = 1980 * 100
        // x = 198000 / 2000
        const percent = time * 100 / 1000;
        return percent;
    }
}






/* <div class="notification_bar_view" id="notification_bar_view">
<div class="notification">
    <div class="notification_header">
        <img src="icons/close_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="close" width="20px" id="remove_notification">
    </div>
    <div class="notification_body">
        <img src="icons/info_30dp_5F6368_FILL1_wght400_GRAD0_opsz24.svg" alt="">
        <p>You have successfully signed in</p>
    </div>
    <div class="notification_footer"><span></span></div>
</div>
</div> */