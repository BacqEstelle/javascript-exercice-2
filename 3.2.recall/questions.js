let selectElementsStartingWithA = (array) => {
    const filtreTexte = (arr, requete) => { 
        return arr.filter(el =>  el.toLowerCase().startsWith(requete.toLowerCase()) === true);
      }
      
    return filtreTexte(array, "A") ;
}

let selectElementsStartingWithVowel = (array) => {
  
    return (array).filter(str => /^[aeiou]/i.test(str));  
}
let removeNullElements = (array) => {
    let filter = array.filter(function (el) {
        return el != null;
      });
    return filter;
}

let removeNullAndFalseElements = (array) => {
        let filter = array.filter(function (el) {
            return el != null && el!== false;
        });
        return (filter);

}

let reverseWordsInArray = (array) => {
 
    let ReverseEleArray = array.map(element => element.split("").reverse().join(""));
    return ReverseEleArray;
}
let everyPossiblePair = (array) => {
    array.sort();
    let pairArray = [];
    for (let i = 0; i < array.length - 1; i++){
        for (let j = i + 1 ; j < array.length; j++){
            pairArray.push([array [i], array [j]]);
        }
    }
    return pairArray;
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    let arrayFinal = array.unshift(1);
    return array;
}

let sortByLastLetter = (array) => {
    array.sort(function(a, b){
        var lastA = a.charAt(a.length - 1);
        var lastB = b.charAt(b.length - 1);
        if (lastA > lastB) {
            return 1;
        } else if (lastA < lastB) {
            return -1;
        } else {
            return 0;
        }
    });
    return array;

}

let getFirstHalf = (string) => {
    return string.substring(0, Math.round(string.length / 2 ));
}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    let palindromes = array.filter ( element => element === element.split("").reverse().join(""));
    return palindromes.length;
}

let shortestWord = (array) => {
    return  array.reduce((a, b) => a.length <= b.length ? a : b)

}

let longestWord = (array) => {
    return  array.reduce((a, b) => a.length > b.length ? a : b)
}

let sumNumbers = (array) => {
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}

let repeatElements = (array) => {

    return array.concat(array);
}

let stringToNumber = (string) => {
    return parseFloat(string);
}

let calculateAverage = (array) => {
    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    return average(array);

}

let getElementsUntilGreaterThanFive = (array) => {
    let numbers = [];
        while (true) {
            let arrayShift = array.shift();
            if (arrayShift >=6){
                return numbers;
            }
            numbers.push(arrayShift);
        }
}
let convertArrayToObject = (array) => {
    let keyArray = [];
    let valueArray = [];
    for (let index = 0; index < array.length; index += 2)
    {
        keyArray.push(array[index]);
    }
    for (let index = 1; index < array.length; index += 2)
    {
        valueArray.push(array[index]);
    }
    let fusion = {};
    keyArray.forEach((key, i ) => (fusion[key] = valueArray[i]));
    return fusion;
}

let getAllLetters = (array) => {
    
    let element = array.join("");
    let elements = element.split("");
    let unique = [...new Set(elements.sort())];
        return unique;

}

let swapKeysAndValues = (object) => {
    let values = Object.keys(object);
    let keys = Object.values(object);
    let result = {};
    keys.forEach((key, i) => (result[key] = values[i]));
    return result;
}

let sumKeysAndValues = (object) => {
    let values = Object.values(object);
    let keys = Object.keys(object).map(Number);
    let sumValues = values.reduce((acc,val) => (acc += val));
    let sumKeys = keys.reduce((acc, key) => (acc += key));
    return sumValues + sumKeys;

}

let removeCapitals = (string) => {
    let letters = string.split("");
    let filterLetter = letters.filter( letter => letter.match(/[a-z ]/));
    filter = filterLetter.join("");
    return filter;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString("fr-FR");
}

let getDomainName = (string) => {
    let domain = string.replace(/.*@/, "");
    let domaine = domain.replace(".com","")

    return domaine;
}

let titleize = (string) => {
    const titleArray = string.split(" ");
    const endArray = [];
  
    titleArray.forEach(word => {
      const wordArray = word.split("");
      wordArray[0] = wordArray[0].toUpperCase();
      const JoinedWord = wordArray.join("");
      endArray.push(JoinedWord);
    });
  
    for (let i = 1; i < endArray.length; i++) {
      if (endArray[i].length < 4) {
        endArray[i] = endArray[i].toLowerCase();
      }
    }
    let joinedArray = endArray.join(" ");
  
    if (joinedArray.includes(".")) {
      const char = joinedArray.charAt(joinedArray.indexOf(".") + 2);
      joinedArray = joinedArray.replace(char, char.toUpperCase());
    }
    return joinedArray;
}

let checkForSpecialCharacters = (string) => {
    let regex = /\W/;
    return regex.test(string);
}

let squareRoot = (number) => {
    return Math.sqrt(number);
}

let factorial = number => {
    let factorial = numbers => {
        if (numbers === 0){
            return 1;
        }
        return numbers * factorial(numbers -1);
    };
    return factorial(number);
}

let findAnagrams = (string) => {

    let pairArray = [];
    for (let i = 0; i < string.length - 1; i++){
        for (let j = i + 1 ; j < string.length; j++){
            for (let k = i +1; k < string.length; k++){

                string.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
                pairArray.push(string [i]+string[j]+string[k]);  
            }
        }
    }
    return pairArray;

     
}

let convertToCelsius = (number) => {
    let farhConvert = fahrenheit =>
    Math.round(((fahrenheit - 32) * 5) / 9);

  return farhConvert(number);
}

let letterPosition = (array) => {
   let mapArray = array.map(el => el.toLowerCase().charCodeAt() - 96);
    return mapArray;
}
