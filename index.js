// https://geek-quote-api-herokuapp.com/v1/quote


function getNewColor(){
    var symbol, color;
    symbol = '0123456789ABCDEF';

    color = '#';
for( var i=0; i<6; i++){
    color = color + symbol[Math.floor(Math.random()*16)];
}
document.body.style.background = color;

//console.log(color);
document.getElementById('hex').innerHTML = color;
//console.log(hex)
}


// const url  = 'https://geek-quote-api-herokuapp.com/v1/quote';
// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data.quote))


//git add
//create a git hub repository
//des.