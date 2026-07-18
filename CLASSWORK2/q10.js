function checkAge(age) {
    if (age < 18) {
        throw "You are not eligible to vote.";
    }

    return "You are eligible to vote.";
}

try {
    console.log(checkAge(16));
} catch (err) {
    console.log(err);
}
