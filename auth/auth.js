// Registration
const registrationButton = document.getElementById('register-button');
registrationButton.addEventListener('click', () => {
    const phoneNumber = document.getElementById('registration-phone').value;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            const verificationCode = prompt('Enter the verification code sent to your phone:');
            return confirmationResult.confirm(verificationCode);
        })
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`Successfully registered with ${user.phoneNumber}`);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Login
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
    const phoneNumber = document.getElementById('login-phone').value;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            const verificationCode = prompt('Enter the verification code sent to your phone:');
            return confirmationResult.confirm(verificationCode);
        })
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`Successfully logged in as ${user.phoneNumber}`);
        })
        .catch((error) => {
            console.error(error);
        });
});
