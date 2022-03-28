const numFinale = 100;
const mile = document.getElementById('mile');
const row = document.createElement('div');
row.setAttribute('class', "row");

for (i = 1;i <= numFinale; i++){
const col = document.createElement('div');
col.setAttribute("class" , "quadrato my-2");
const numero = document.createElement('div');
    // prima l'insieme in modo tale da non creare confusione con i singoli
    if ( i % 3 === 0 &&  i % 5 === 0) {
        console.log('FizzBuzz');
        numero.setAttribute("class" , "multiple-15");
        numero.innerHTML = 'FizzBuzz';
    }

    else if ( i % 3 === 0) {
        console.log('Fizz');
        numero.setAttribute("class" , "multiple-3");
        numero.innerHTML = 'Fizz';
    }
    
    else if ( i % 5 === 0) {
        console.log('Buzz');
        numero.setAttribute("class" , "multiple-5");
        numero.innerHTML = 'Buzz';
    } 
    
    else {
        numero.setAttribute("class" , "normal");
        numero.innerHTML= i;
    }

    col.append(numero);
    row.append(col);
}

mile.append(row);