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

function cleanSpaces(word) {
  return word.replaceAll(' ', '');
}

function createEmail(user) {
  return `${cleanSpaces(user.name)}.${cleanSpaces(user.lastName)}@ironhack.com`.toLocaleLowerCase();
}

function getUserNames(users) {
  const names = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    names.push(user.name);
  }
  return names;
}

function filterByKind(users, isDeveloper) {
  const filteredUsers = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.isDeveloper === isDeveloper) {
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}

function sendWelcomeToDevelopers(users, message) {
  const developers = filterByKind(users, true);
  for (let i = 0; i < developers.length; i++) {
    const developer = developers[i];
    console.log(`${message.text} ${developer.name}`)
  }
}

// ['Carlos', 'Julio', 'Ana']

const user = {
  name: 'Carlos',
  lastName: 'del Prado Mota',
  age: 34,
  isDeveloper: true,
  skills: ['scala', 'css', 'php'],
}

const users = [
  {
    name: 'Carlos',
    isDeveloper: true,
    age: 34
  },
  {
    name: 'Julio',
    age: 30,
    isDeveloper: true
  },
  {
    name: 'Ana',
    age: 38,
    isDeveloper: false
  }
]

const message = {
  text: 'Hi developer!',
  assets: ['avatar.png']
}

console.log(user);
console.log(user.name);
user.name = 'Julio';
user.isTeacher = true;

console.log(user['name']);
console.log(user);
user.email = createEmail(user);
console.log('email:', user);

console.log(greet('Carlos'));
console.log(greet('Julio'));
console.log(min([3, 2, 4]));

console.log(getUserNames(users));
console.log('developers', filterByKind(users, true));
console.log('non developers', filterByKind(users, false));
sendWelcomeToDevelopers(users, message);
