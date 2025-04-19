
// the user should choose the option (sign Up, Login, Changing the password) that he wants access to:

function checkin () {
    let User = prompt("choose the option: `signUp`, `Login`, or `reset Password`")

    switch (User) {
        case `signUp`:
            signUp();
            return checkin()
        case `Login`:
            login();
            return checkin()
        case `reset`:
            reset_password();
            return checkin()
        default:
            alert(`invalid option ${User} , choose the right option`)
            return checkin()
    }  
}


// Option: SIGN UP;

function signUp() {
     //*Name:
    let fullName = prompt("Enter your Full name");
    if (!fullName) {  // if the user doesn't enter any name he get this alert
        alert('the option is EMPTY! please enter your full name')
        return;
    }

    // the name shouldn't be less than 5 characters (no spaces)
    const fullNameLength = fullName.replace(/\s+/g, '').length;
    if (fullNameLength < 5) {
    alert(`your full should not be less than 5 characters \n your full name has ${fullNameLength}`);
    return;
    }
    // no special characters in full name
    for (let letter of fullName) {
            if (/[#@\-+\*/]/.test(letter)) {
            alert(`the name shouldn't contain '${letter}'`);
            return;
        }
    }
    //the first letter (Uppercase) other letters (lowerCase)
    fullName = fullName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    // removing white spaces / 
    fullName = fullName.replace(/\s+/g, ' ').trim();
    alert("fullName registed: " + fullName);


    //*Email:
        let email = '';
        let validEmail = false;
        while (!validEmail) {  // if the user doesn't enter any email he get this alert
            email = prompt("Enter an E-mail")
            if (!email) {
                alert('the option is EMPTY! please enter your email');
                email = prompt("Enter an e-mail");
                return;
            }
            
            
            // delete space 
            email = email.trim().toLowerCase()
            
            // should contain @
            if ((!email.includes('@')) || email.split('@').length !== 2) {
                alert("the email should contain one '@' ");
            email = prompt("Enter an e-mail");
            return;
            
            // '.' symbols
        } if (email.split('.').length - 1 != 1) {
            alert("the email should contain one '.'");
            email = prompt("Enter an e-mail");
            return;
        } 
        
        // spaces
        if (email.includes(' ')) {
            alert('your email contain spaces please enter a valid mail');
            email = prompt("Enter an e-mail");
            return;
        } 
        
        // the email should contain more than 10 characters and unique
        
        if (email.length < 10) {
            alert("Email must contain more than 10 characters")
            return ;
        }
        if (!uniqueEmail(email)) {
            alert("this email is already taken")
            return ;
        }
            validEmail = true;
        } 

        alert("Email registed: " + email);
    
    //*Age
    
        let age = prompt('enter your age');
        if (!age) {  // if the user doesn't enter any number he get this alert
            alert('the option is EMPTY! please enter your age')
            return age;
        } 
        // leading, trailing, middle spaces
        age = age.trim();
        //contain only digits
        let noDigit = false;
        for (let index = 0; index < age.length; index++) {
            if (isNaN(age[index])) {
                noDigit = true;
                break;
            } 
        }
    
        if (noDigit) {
            alert('the age must be in digits!');
            return age;
        }

        // no savin' of the age if it has 0 characters
        if (age.length === 3) {
            alert("too many characters");
            return;
        } else if (age.length > 3) {
            alert("it shouldn't have more than 2 digits");
        }
        alert("your age is saved: " + age);

        //* Password

        let password = prompt("Enter a password")
        if (!password) {
            alert('enter a valid password')
            return password;
        }
        // leading or trailing spaces.
        password = password.trim();
        //space in the middle
        if (password.includes(' ')) {
            alert('the password should not contain space')
            return password;
        }
        //requiring at least one character
        const specialChar = /[#@\-+\*/]/.test(password);
        if (!specialChar) {
            alert("password must contain at least one special character");
            return password;
        }
        //confirmation of the password
        let confirmPassword ;
        do {
            confirmPassword = prompt("confirm your password")
            if (password !== confirmPassword) {
                alert("password doesn't match");
            }
        } while (password !== confirmPassword);
        alert("password accepted: " + password);

}

    // Full Name
    let userFullName = fullName;
    // Email
    let userEmail = email;
    // Age
    let userAge = age;
    // Password
    let userPassword = password;
//* Option: Log In;

function login() {
    //Email 
    let email = prompt('enter your email');
    for (let index = 0; index < bank.users.length; index++) {
        for(let user of Bank.users) { // chechin if the email of the user is in database
            if (user.email === email) {
                user.found = true;
                break;
            }
        }
    }
    if (!userfound) {
        alert(`No user found with this ${email}`); 
        return;
    }
    alert(`the email is saved `)

    let password = prompt('enter the password');
        if (user.password === password) {
            alert('login successfully');
        } else {
            alert('Incorrect password')
        }
}

//* Option:  changing Password ; 






