// Import the encryptors functions here.
const encryptors = require('./encryptors.js');
const { caesarCipher, symbolCipher, reverseCipher }  = encryptors;


// Функция шифрует исходную строку тремя разными способами на выбор, можно менять логику
const encodeMessage = (str) => {
   let result = symbolCipher(str);
   result = reverseCipher(result);
   return caesarCipher(result, 6);
}

// Функция дешифрует зашифрованную строку обратно в исходную
const decodeMessage = (str) => {
   let result = caesarCipher(str, 20);
   result = reverseCipher(result);
   return symbolCipher(result);
}

// User input / output.
const handleInput = (userInput) => {
   const str = userInput.toString().trim();
   let output;
   if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
   } 
   if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
   } 
   
   process.stdout.write(output + '\n');
   process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);