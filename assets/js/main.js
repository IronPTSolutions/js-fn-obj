console.log('Main JS Loaded');

function greet(name) {
  return `Hi! ${name}`;
}

function min(numbers) {
  let minNumber;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (minNumber === undefined || number < minNumber) {
      minNumber = number;
    }
  }
  return minNumber;
}

function isVowel(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

function countVowels(word) {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (isVowel(char)) {
      counter++;
    }
  }
  return counter;
}

function longestWord(words) {
  let longest;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (longest === undefined || word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// obtener el primer número negativo: [1, 2, -3, -5, 10] => -3


console.log(greet('Carlos'));
console.log(greet('Julio'));
console.log(min([3, 2, 4]));
