function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    
    throw new Error(' The String length will be between 1 to 10 characters');
  }
  return str.length;
}



class Calc {
  static addition(a, b) {
    return a + b;
  }

  static subtraction(a, b) {
    return a - b;
  }


  static division(a, b) {
    return a / b;
  }

  static multiplication(a, b) {
    return a * b;
  }
}


function capitalize(string) {
  const stringWithoutFirstLetter = string.slice(1);
  const capitalizedString = string.charAt(0).toUpperCase() + stringWithoutFirstLetter;

  return capitalizedString;
}

export {
  stringLength,
  capitalize,
  Calc
};
