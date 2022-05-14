var isPalindrome = function (x) {
    // find the length of the string
    const len = x.length;

    // loop through half of the string
    
    for (let i = 0; i < len/2; i++) {
        if(x[i] != [len -1 -i]){
            return 'It is not a palindrome'
        }
            
        }
    return "It is a palindrome"
    
    }