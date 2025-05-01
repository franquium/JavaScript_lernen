/*
 * @file script.js
 * @description Palindrome checker application that validates if user input reads the same forwards and backwards
 * 				ignoring punctuation, case, and spacing.
 * @author franquium
 */

document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements	
  const textInput = document.getElementById('text-input');	// Input field where user types text
  const checkBtn = document.getElementById('check-btn');	// Button that triggers the palindrome check
  const result = document.getElementById('result');			// Element where results will be displayed
  
  // Add click event to button
  checkBtn.addEventListener('click', function() {
    // Check if input is empty
    if (!textInput.value) {
      alert('Please input a value');
      return;
    }
    
    const inputText = textInput.value;	// Stores user's input text
    const isPalindrome = checkPalindrome(inputText);	// Instantiation of checkPalindrome fn and stores the result
    
    // Display result
    if (isPalindrome) {
	  // If it is a palindrome
      result.innerHTML = `<span class="palindrome">${inputText} is a palindrome.</span>`;
    } else {
	  // If it is not a palindrome	
      result.innerHTML = `<span class="not-palindrome">${inputText} is not a palindrome.</span>`;
    }
  });
  
  /**
   * Checks if a string is a palindrome
   * @param str  The input string to check
   * @returns boolean True if the string is a palindrome, false otherwise
   */
  function checkPalindrome(str) {
    // Clean the string by removing all non-alphanumeric characters and convert to lowercase
	// where [^0-9a-z] is a regex pattern to filter any non-alphanumeric characters
    const cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    // Check if the cleaned string is a palindrome by reversing the order of the array made by the elements of the string
	// then joins the array back into a string
    const reversedStr = cleanedStr.split('').reverse().join('');
	
	// Compare the cleaned string with the reversed version of it
	// if they match, its palindrome and return true
    return cleanedStr === reversedStr;
  }
});