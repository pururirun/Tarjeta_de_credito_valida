function isValidCard(card){
  var card = prompt("Ingrese número de tarjeta");
  var invertedNum = []; //Almacena números invertidos.
  for(var i = card.length - 1; i >= 0; i--){ //Recorrí variable para entregar los números invertidos.
      invertedNum.push(parseInt(card[i]));

  }
  for(var j = 1; j < invertedNum.length; j += 2){ //For recorre el Array para identificar las posiciones pares.
      pairNum = invertedNum[j]*2; //Se están múltiplicando los números de las posiciones pares por 2.
      if(pairNum >=10){ //Si es igual o mayor que 10 se...
        sum = pairNum - 9; //suman los digitos.
        invertedNum[j] = sum;
      }
      else{
          invertedNum[j] = pairNum;
      }
      var totalSum = 0;
      for(var k = 0; k < invertedNum.length; k++){
          totalSum += invertedNum[k];
      }
  }
  if(totalSum %10 == 0){
      alert("Tarjeta de crédito válida");
  }
  else{
      alert("Tarjeta de crédito inválida");
  }
}
  isValidCard();
