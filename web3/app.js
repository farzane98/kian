var ans = prompt('rock, paper or scissors?');
var output = document.getElementById('output');
ans = ans.toLowerCase();
var rand = Math.random()*3;
rand = Math.floor(rand);
// 0=rock 1=paper 2=scissors
console.log(rand);
if (ans== 'rock'){
    switch (rand){
        case 0:
        output.innerHTML = 'rock........try again!';
        break;
    
        case 1 :
        output.innerHTML = 'paper........you loose!';
        break;

        case 2:
        output.innerHTML = 'scissors........you win!';
        break;

    }
}
else if (ans == 'paper'){
    switch(rand){
        case 0:
        output.innerHTML = 'rock........you win!';
        break;
    
        case 1 :
        output.innerHTML = 'paper........try again!';
        break;
    
        case 2:
        output.innerHTML = 'scissors........you loose!';
        break;
    }

}
else if (ans == 'scissors'){
    switch (rand){
        case 0:
        output.innerHTML = 'rock........you loose!';
        break;
    
        case 1:
        output.innerHTML = 'paper........you win!';
        break;
    
        case 2:
        output.innerHTML = 'scissors........try again!';
        break;
    }
}
elss{
    alert('incorect object!')
}


