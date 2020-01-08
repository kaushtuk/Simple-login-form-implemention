function validatePasswordStrength() {
    var passw = document.getElementById('passwordTag').value;
    console.log(passw);
    var reg = /\w*/g;
    var largeCase = passw.search(/[A-Z]/g);
    var smallCase = passw.search(/[a-z]/g);
    var numericChar = passw.search(/[0-9]/g);
    var specialChar = passw.search(/[^a-zA-Z0-9]/g);

    if (smallCase != -1) {
        console.log('small cases is present at ' + smallCase);
        document.getElementById('s').innerHTML = ' Done';
        document.getElementById('s').style.color = 'green';
    } else {
        document.getElementById('s').innerHTML = '  small case alphabet required ';
        document.getElementById('s').style.color = 'red';
    }

    if (largeCase != -1) {
        console.log('large cases is present at ' + largeCase);
        document.getElementById('l').innerHTML = ' Done';
        document.getElementById('l').style.color = 'green';
    } else {
        document.getElementById('l').innerHTML = ' large case alphabet required ';
        document.getElementById('l').style.color = 'red';
    }

    if (numericChar != -1) {
        console.log('number is present at ' + numericChar);
        document.getElementById('n').innerHTML = ' Done';
        document.getElementById('n').style.color = 'green';
    } else {
        document.getElementById('n').innerHTML = ' number required ';
        document.getElementById('n').style.color = 'red';
    }

    if (specialChar != -1) {
        console.log('special char is present at ' + specialChar);
        document.getElementById('sp').innerHTML = ' Done';
        document.getElementById('sp').style.color = 'green';
    } else {
        document.getElementById('sp').innerHTML = ' special character required ';
        document.getElementById('sp').style.color = 'red';
    }
}