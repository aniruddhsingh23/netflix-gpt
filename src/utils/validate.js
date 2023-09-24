export const checkValidData = (email, password) => {
    // Regular expression to validate email
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    // Regular expression to validate password with at least one digit, one lowercase letter,
    // one uppercase letter, and a minimum length of 8 characters
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
        return "Email is not valid";
    }
    if (!passwordRegex.test(password)) {
        return "Password is not valid";
    }

    // If both email and password are valid, return null
    return null;
};
