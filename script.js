const buttons = document.querySelectorAll('.button');
const heading = document.querySelector('h1');
const heading2 = document.querySelector('h2');

const body = document.querySelector('body');

buttons.forEach(function (button){

    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                heading.style.color = 'grey';
                heading2.style.color = 'grey';
                heading.style.textShadow = '2px 2px #817162';
                heading2.style.textShadow = '2px 2px #817162';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                heading.style.color = 'white';
                heading2.style.color = 'white';
                heading.style.textShadow = '2px 2px #eeeee4';
                heading2.style.textShadow = '2px 2px #817162';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                heading.style.color = 'blue';
                heading2.style.color = 'blue';
                heading.style.textShadow = '2px 2px #2596be';
                heading2.style.textShadow = '2px 2px #817162';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';  
                heading.style.color = 'yellow'; 
                heading2.style.color = 'yellow';
                heading.style.textShadow = '2px 2px #f3ae4f'; 
                heading2.style.textShadow = '2px 2px #817162';        
            default:
                break;
        }
    })
})