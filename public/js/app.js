// the object to stock the user data
const bank = {
    users: []
};
// the user should choose the option (sign Up, Login, Changing the password) that he wants access to:

function checkin () {
    let User = prompt("choose the option: `sign up`, `login`, or `reset password`")

        switch (User) {
            case `sign up`:
                signUp();
                return checkin()
            case `login`:
                login();
                return checkin()
                default:
                alert(`invalid option ${User} , choose the right option`)
                return checkin()
            case `reset password`:
                reset_password();
                return checkin()
        }  
    }

    let userfullName = '';
    let userEmail = '';
    let userAge = '';
    let userPassword = '';


// Option: SIGN UP;

function signUp() {
     //*Name:
    let fullName = prompt("Enter your Full name"); 
    while (true) { // return to the only failed step
        if (!fullName) {  // if the user doesn't enter any name he get this alert
        alert('the option is EMPTY! please enter your full name')
        return signUp();
    }
    break;
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
      //* Email:
        let email;
        let validEmail = false;

        while (!validEmail) {
        email = prompt("Enter an E-mail");

        // If email is empty
        if (!email) {
            alert("The option is EMPTY! Please enter your email.");
            return;
        }

        // Remove spaces and convert to lowercase
        email = email.trim().toLowerCase();

        // Check for exactly one '@'
        if (!email.includes('@') || email.split('@').length !== 2) {
            alert("The email should contain one '@'.");
            continue;
        }

        // Check if it contains at least one '.'
        if ((email.split('.').length - 1) < 1) {
            alert("The email should contain at least one '.'");
            continue;
        }

        // Check for spaces inside the email
        if (email.includes(' ')) {
            alert("Your email contains spaces. Please enter a valid email.");
            continue;
        }

        // Check email length
        if (email.length < 10) {
            alert("Email must contain more than 10 characters.");
            continue;
        }

        // Check uniqueness of email
        let uniqueEmail = true;
        for (let user of bank.users) {
            if (user.email === email) {
            uniqueEmail = false;
            break;
            }
        }

        if (!uniqueEmail) {
            alert("This email is already used. Enter a new one.");
            continue;
        }

        // If all checks pass
        validEmail = true;
        alert("Email registered: " + email);
        }

    
    //*Age
    
        let age = prompt('enter your age');
        if (!age) {  // if the user doesn't enter any number he get this alert
            alert('the option is EMPTY! please enter your age')
            return;
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
            return;
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
            return;
        }
        // leading or trailing spaces.
        password = password.trim();
        //space in the middle
        if (password.includes(' ')) {
            alert('the password should not contain space')
            return; // This was causing the issue. You don't want to loop here, just return to password prompt
        }
        //requiring at least one character
        const specialChar = /[#@\-+\*/]/.test(password);
        if (!specialChar) {
            alert("password must contain at least one special character");
            return; // If condition fails, it just returns here
        }
        //confirmation of the password
        let confirmPassword;
        do {
            confirmPassword = prompt("confirm your password");
            if (password !== confirmPassword) {
                alert("password doesn't match");
            }
        } while (password !== confirmPassword);

        alert("password accepted: " + password);


        bank.users.push({
            fullName: fullName,
            email: email,
            age: age,
            password: password,
            balance: 400,
        });
        alert("Registration complete!");

        console.log(`User registered: ${fullName}, Email: ${email}, Age: ${age}`);
}



    
//* Option: Log In;
function login() {
    // Email 
    let email = prompt('enter your email');
    let userfound = null;
    for (let user of bank.users) { // checking if the email of the user is in database
        if (user.email === email) {
            userfound = user;
            break;
        }
    }

    if (!userfound) {
        alert(`No user found with this ${email}`); 
        return;
    }

    alert(`the email is saved`);

    let password = prompt('enter the password');
    if (userfound.password === password) {
        alert('login successfully');

        //  Create an instance of the class
        let loggedUser = new User(
            userfound.fullName,
            userfound.email,
            userfound.age,
            userfound.password,
            userfound.balance
        );

        alert(`Welcome back ${loggedUser.fullName}`);
        
        if (email === User.email && password === User.password) {
        alert(`Welcome back ${loggedUser.fullName}`);
        console.log(`User logged in: ${loggedUser.email}`);
        }
        let action;
        do {
            action = prompt("Choose an action:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Logout");

            switch (action) {
                case "1":
                    loggedUser.displaybalance();
                    break;
                case "2":
                    let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                    loggedUser.deposit(depositAmount);
                    break;
                case "3":
                    let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                    loggedUser.withdrawal(withdrawAmount);
                    break;
                case "4":
                    alert("Logged out successfully.");
                    break;
                default:
                    alert("Invalid option. Please try again.");
                    break;
            }
        } while (action !== "4");

    } else {
        alert('Incorrect password');
    }

    console.log(`User logged in: ${email}`);
}




//* Option:  changing Password ; 
function reset_password() {
    //*Email
    let email = prompt('enter your email');
    for (let index = 0; index < bank.users.length; index++) {
        for(let user of bank.users) { // chechin if the email of the user is in database
            if (user.email === email) {
                userfound = user;
                break;
            }
        }
    }
    if (userfound) {
        userfound.password = password;
        alert("password reset")
        console.log(`Password reset for: ${userfound.email}`);
        
    }
    if (!userfound) {
        alert(`No user found with this ${email}`); 
        return;
    }
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



//* The classes: Bank, loan, Investement;
class User {
    constructor(fullName, email, age, password, balance) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.password = password;
        this.balance = balance;
    }

    withdrawal(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`withdraw: $${amount}`);
            
        } else {
            console.log(`want to withdraw: $${amount}`);
            console.log(`Insufficient balance`);
        }
    }
    displaybalance() {
        console.log(`account balance: $${this.balance}`);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`deposited: $${amount}`);
        
    }

}

checkin()





