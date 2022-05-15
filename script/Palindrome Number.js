var isPalindrome = function (x) {
    if(x < 0)
        return false
    
    let reversedInteger = 0, y=x
    
    while(y>0){
        const lastDigit  = y % 10
        reversedInteger = (reversedInteger * 10) + lastDigit
        y= (y/10) | 0
    }
    
    return x === reversedInteger
    
    }