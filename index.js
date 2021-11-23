function getLetterCoordinates(matrix,letter){
  const indexElementMatrix = [];
  const letterArray = letter.split('');
  let matrixArray = matrix.split('');
  let n = Math.sqrt(matrixArray.length);
  const result = [];
  if (typeof matrix !== 'undefined' && typeof letter !== 'undefined')
  while(matrixArray.length > 0)
  { 
  result.push(matrixArray.slice(0, n));
  matrixArray = matrixArray.slice(n);
  }
  const result2 = [];
  for(let i =0; i<= result.length; i++)
  if (typeof result[i] !== 'undefined')
  result[i].forEach(function(element){
  letterArray.forEach(item => (item === element)?result2.push(element): 'ne to')
  });

if (n % 3 === 0){
 for (let i = 0; i < result2.length; i++){
      for (let y = 0; y < result.length; y++) {
        for (let x = 0; x < result[0].length; x++) { 
          if (result[y][x] == result2[i]) 
          indexElementMatrix.push([y,x]);         
        }
      }
 }
 return indexElementMatrix.join('->');  
}else {console.log('ne % 3, because ne to'); 
}  
}  
  console.log(getLetterCoordinates('Stepanbry', 'bal'));


