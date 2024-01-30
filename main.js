// Question 1
document.addEventListener('DOMContentLoaded', function(){
    let curry = document.querySelector('#Curry1');
    let jordan = document.querySelector('#Jordan1');
    let jabbar = document.querySelector('#Jabbar1');
    let bryant = document.querySelector('#Bryant1');
    let james = document.querySelector('#James1');
    let q1 = document.querySelector('#Q1');
    let q1_buttons = q1.querySelectorAll('button');
    // Resets and changes the color of buttons, along with the text displayed below
    curry.addEventListener('click', function(event){
        q1_buttons.forEach(button => button.style.backgroundColor = '');
        curry.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer1').innerHTML = 'Incorrect';
    })
    jordan.addEventListener('click', function(event){
        q1_buttons.forEach(button => button.style.backgroundColor = '');
        jordan.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer1').innerHTML = 'Incorrect';
    })
    jabbar.addEventListener('click', function(event){
        q1_buttons.forEach(button => button.style.backgroundColor = '');
        jabbar.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer1').innerHTML = 'Incorrect';
    })
    bryant.addEventListener('click', function(event){
        q1_buttons.forEach(button => button.style.backgroundColor = '');
        bryant.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer1').innerHTML = 'Incorrect';
    })
    // correct answer
    james.addEventListener('click', function(event){
        q1_buttons.forEach(button => button.style.backgroundColor = '');
        james.style.backgroundColor = '#4ee043';
        event.preventDefault();
        document.querySelector('#Answer1').innerHTML = 'Correct!';
        q1_buttons.forEach(button => button.disabled = true);
        james.disabled = false;
    })
})

// Question 2
document.addEventListener('DOMContentLoaded', function(){
    let q2 = document.querySelector('#Q2')
    document.querySelector('#Submit2').addEventListener('click', function(event){
        if (q2.value.toUpperCase() == 'JAMES HARDEN' || q2.value.toUpperCase() == 'HARDEN'){
            q2.style.backgroundColor = '#4ee043';
            event.preventDefault();
            document.querySelector('#Answer2').innerHTML = "Correct!";
            q2.disabled = true;
        }
        else{
            q2.style.backgroundColor = 'red';
            event.preventDefault();
            document.querySelector('#Answer2').innerHTML = "Incorrect";
        }
    })
})

// Question 3
document.addEventListener('DOMContentLoaded', function(){
    let q3 = document.querySelector('#Q3')
    document.querySelector('#Submit3').addEventListener('click', function(event){
        if (q3.value.toUpperCase() == 'BOSTON CELTICS' || q3.value.toUpperCase() == 'CELTICS'){
            q3.style.backgroundColor = '#4ee043';
            event.preventDefault();
            document.querySelector('#Answer3').innerHTML = "Correct!";
            q3.disabled = true;
        }
        else{
            q3.style.backgroundColor = 'red';
            event.preventDefault();
            document.querySelector('#Answer3').innerHTML = "Incorrect";
        }
    })
})

// Question 4
document.addEventListener('DOMContentLoaded', function(){
    let paul = document.querySelector('#Paul4');
    let johnson = document.querySelector('#Johnson4');
    let stockton = document.querySelector('#Stockton4');
    let james = document.querySelector('#James4');
    let kidd = document.querySelector('#Kidd4');
    let q4 = document.querySelector('#Q4');
    let q4_buttons = q4.querySelectorAll('button');
    // Resets and changes the color of buttons, along with the text displayed below
    paul.addEventListener('click', function(event){
        q4_buttons.forEach(button => button.style.backgroundColor = '');
        paul.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer4').innerHTML = 'Incorrect';
    })
    johnson.addEventListener('click', function(event){
        q4_buttons.forEach(button => button.style.backgroundColor = '');
        johnson.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer4').innerHTML = 'Incorrect';
    })
    // correct answer
    stockton.addEventListener('click', function(event){
        q4_buttons.forEach(button => button.style.backgroundColor = '');
        stockton.style.backgroundColor = '#4ee043';
        event.preventDefault();
        document.querySelector('#Answer4').innerHTML = 'Correct!';
        q4_buttons.forEach(button => button.disabled = true);
        stockton.disabled = false;
    })
    james.addEventListener('click', function(event){
        q4_buttons.forEach(button => button.style.backgroundColor = '');
        james.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer4').innerHTML = 'Incorrect';
    })
    kidd.addEventListener('click', function(event){
        q4_buttons.forEach(button => button.style.backgroundColor = '');
        kidd.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer4').innerHTML = 'Incorrect';
    })
})

// Question 5
document.addEventListener('DOMContentLoaded', function(){
    let grizzlies = document.querySelector('#Grizzlies5');
    let nets = document.querySelector('#Nets5');
    let raptors = document.querySelector('#Raptors5');
    let magic = document.querySelector('#Magic5');
    let nuggets = document.querySelector('#Nuggets5');
    let q5 = document.querySelector('#Q5');
    let q5_buttons = q5.querySelectorAll('button');
    // Resets and changes the color of buttons, along with the text displayed below
    grizzlies.addEventListener('click', function(event){
        q5_buttons.forEach(button => button.style.backgroundColor = '');
        grizzlies.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer5').innerHTML = 'Incorrect';
    })
    // correct answer
    nets.addEventListener('click', function(event){
        q5_buttons.forEach(button => button.style.backgroundColor = '');
        nets.style.backgroundColor = '#4ee043';
        event.preventDefault();
        document.querySelector('#Answer5').innerHTML = 'Correct!';
        q5_buttons.forEach(button => button.disabled = true);
        nets.disabled = false;
    })
    raptors.addEventListener('click', function(event){
        q5_buttons.forEach(button => button.style.backgroundColor = '');
        raptors.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer5').innerHTML = 'Incorrect';
    })
    magic.addEventListener('click', function(event){
        q5_buttons.forEach(button => button.style.backgroundColor = '');
        magic.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer5').innerHTML = 'Incorrect';
    })
    nuggets.addEventListener('click', function(event){
        q5_buttons.forEach(button => button.style.backgroundColor = '');
        nuggets.style.backgroundColor = 'red';
        event.preventDefault();
        document.querySelector('#Answer5').innerHTML = 'Incorrect';
    })
})