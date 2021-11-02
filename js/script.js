const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click', function(){
  const level = document.getElementById('level').value;
  let squareNumber = 0;

  if(level === '1'){
    squareNumber = 100;
  }else if(level === '2'){
    squareNumber = 81;
  }else{
    squareNumber = 49;
  }

  console.log(squareNumber);

  for(let i = 0; i < squareNumber; i++){
    
  }
})