const times = [56, 9, 45, 28, 35];

var result = times.reduce(function (total, item, indice, array) { total = total + item;

  if(indice === array.length - 1) {
      return total / array.length;
  }
    
  return total;
});

console.log(result);
