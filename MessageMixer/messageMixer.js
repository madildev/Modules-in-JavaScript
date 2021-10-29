// function to count the charater same in the message to a given character 
let countCharacter = function (inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 
  };
  // function to make first letter of every word uppar Case
  let capitalizeFirstCharacterOfWords = function (string) {
    let arr = string.split(" ");  
      for (let i = 0; i < arr.length; i++) {  
        let word = arr[i];
          arr[i] = word[0].toUpperCase() + word.substring(1); 
      }
    return arr.join(" "); 
  };
  
  // function to reverse the words in the string
  let reverseWord = function (word) {
    return word.split("").reverse().join("");
  };
  // function to reverse the whole string
  let reverseAllWords = function (sentence) {
    let words = sentence.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
      }
     return words.join(" ");
  };
  // function to replace a word from a message with a given word
  let replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  };
  // Replace all the words in the strings with given words
  let replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  };
  // function to encode the message by replacing characters
  let encode = function (string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  };
  /* function to see if the message is palindrome
  by reveersing the string */
  let palindrome = function(str){
   return `${str}   ${reverseWord(str)} `;
  };
  // function add a special character instead of space
  let pigLatin = function (sentence,character){
  return sentence.split(' ').join(character + ' '); 
  };
  // exporting all the functions
  export { countCharacter , capitalizeFirstCharacterOfWords , reverseWord ,
  reverseAllWords , replaceFirstOccurence ,
  replaceAllOccurrences , encode , palindrome ,
  pigLatin } ;