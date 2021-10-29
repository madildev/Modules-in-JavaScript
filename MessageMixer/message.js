// importing all the functions from the file
import { countCharacter , capitalizeFirstCharacterOfWords , reverseWord ,
    reverseAllWords , replaceFirstOccurence ,
    replaceAllOccurrences , encode , palindrome ,
    pigLatin } from './messageMixer' ;
    
    // function to display the message 
    function displayMessage() {
      // calling countCharater function
      console.log(countCharacter("What is the color of the sky?", "t"));
      // calling capitalizeFirstCharacterOfWords function
      console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
      // calling the reverse word function 
      console.log(reverseWord("What is the color of the sky?"));
      // calling reverseAllWords function
      console.log(reverseAllWords("What is the color of the sky?"));
      // calling replaceFirstOccurence function
      console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
      // calling the encode function
      console.log(encode("What is the color of the sky?"));
      // calling the palindrome function 
      console.log(palindrome("What is the color of the sky ?"));
      // calling the pigLatin function
      console.log(pigLatin("What is the color of the sky ?" , ' @'));
    }
    // calling displayMessage Function
    displayMessage();
