function isPalindrome(string) {
    const sanitizedString = string.toLowerCase().replace(/[^a-z]/g, ''); 
    return sanitizedString === sanitizedString.split('').reverse().join('');
  }
  
  function findPalindromeStrings(string) {
    const words = string.split(' ');
    const palindromeStrings = [];
  
    for (let i = 0; i < words.length; i++) {
      if (isPalindrome(words[i])) {
        palindromeStrings.push(words[i]);
      }
    }
  
    return palindromeStrings;
  }
  
  const inputString = "Hello madam. I'm bob friend";
  const palindromes = findPalindromeStrings(inputString);
  console.log('Palindrome strings:', palindromes);
  // Remove non-alphabetic characters and convert to lowercase