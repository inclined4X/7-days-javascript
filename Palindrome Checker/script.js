

function isPalindrome(str){
    /* converts strings into lowerCase and replace characters outside of numbers and letters 
     to be removed */
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');


    /* puts each  letter or number in an array and reverses it and joins them to form a string 
    without commas */
    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr === reversedStr;
}



function palindromeChecker(){

    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');
    

    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a Palindrome`;
    }else{
        result.textContent = `"${inputText.value}" is not a Palindrome`;
    }

    result.classList.add('fadeIn');
    inputText.value = "";

}



document.getElementById('checkButton').addEventListener('click',palindromeChecker);
