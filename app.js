var submit = document.getElementById("notify");
submit.addEventListener("click", abc);

function abc() {
    var emailVal = document.getElementById("email").value;
    var error = document.getElementById("err");
    var email = document.getElementById("email");
    var atPosition = emailVal.indexOf("@");
    var dotPosition = emailVal.lastIndexOf(".");
    // The `input` field is empty
    if (emailVal.length < 1) {
        error.innerText = "Whoops! It looks like you forgot to add your email";
        error.classList.add("onSubmit");
        email.style.border = "1px solid var(--light-red)";
    }
    //  The email address is not formatted correctly
    else if (atPosition < 1 || (dotPosition - atPosition < 2)) {
        error.innerText = "Please provide a valid email address";
        error.classList.add("onSubmit");
        email.style.border = "1px solid var(--light-red)";
    }
    // Everything goes right
    else {
        error.innerText = " ";
        email.style.border = "1px solid var(--pale-blue)";
    }
}