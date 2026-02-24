var answer;
var score = 0;
var backgroudImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;

}

function checkAnswer() {

    const prediction = predictImage();
    console.log('answer: ' + answer, 'prediction: ' + prediction);

    if (prediction == answer) {
        score++;
        console.log('Correct. Score: ' + score);
        if (score <= 6) {
            backgroudImages.push('url(images/background' + score + '.svg)');
            document.body.style.backgroundImage = backgroudImages;
        } else{
            alert('Well done! Your math garden is in full bloom! Want to start again?');
            score = 0;
            backgroudImages = [];
            document.body.style.backgroundImage = backgroudImages;
        }
        
    } else {
        if (score != 0) { score--; }
        console.log('Wrong. Score: ' + score);
        alert('Oops! Check your calculations and try writing the number neater next time!');
        setTimeout(function () {
            backgroudImages.pop();
            document.body.style.backgroundImage = backgroudImages;

        }, 1000 );
    }

}