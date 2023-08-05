module.exports = function toReadable (number) {

  let ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen', 'eighteen','nineteen']

  let tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety',]
  
  let numberS = number.toString();
  
  if (number === 0) return 'zero';
  
  if (number <= 19) result = ones[number];
  
  if (number > 19 && number <=99) {
    if (numberS[1] === '0')
      result = tens[numberS[0]];
    else {
      result = tens[numberS[0]] + ' ' + ones[numberS[1]];
    }
  };
  
  if (number > 99 && number <=999) {
    if (numberS[1] === '0' && numberS[2] === '0')
      result = ones[numberS[0]] + ' ' + 'hundred';
    else {
      result = (ones[numberS[0]] + ' ' + 'hundred') + ' ' + toReadable(Number(numberS[1] + numberS[2]));
    }
  };
  
  if (number > 999 && number <=9999) {
    if (numberS[1] === '0' && numberS[2] === '0' && numberS[3] === '0')
      result = ones[numberS[0]] + ' ' + 'thousand';
    else {
      result = (ones[numberS[0]] + ' ' + 'thousand') + ' ' + toReadable(Number(numberS[1] + numberS[2] + numberS[2]));
    }
  }
  return result;
  }
