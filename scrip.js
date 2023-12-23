function register() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var age = document.getElementById('age').value;
    var number = document.getElementById('number').value;
    var qualification = document.getElementById('qualification').value;

    console.log('Registration Details:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Age:', age);
    console.log('Number:', number);
    console.log('Qualification:', qualification);
}

function moveToNextPage() {
    window.location.href = 'page.html';
}

// quiz 
function startQuiz() {
    document.querySelector('.registration-form').style.display = 'none';
    document.querySelector('.quiz').style.display = 'block';
    
    function quizEnd(){
        
        document.querySelector('.qbutton').style.display = 'block'
    }
    }
    

function checkAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        var answerValue = selectedOption.value;

        if (answerValue === 'A') {
            alert("Your answer is correct!");
        } else {
            alert("Incorrect answer. Please try again!");
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}