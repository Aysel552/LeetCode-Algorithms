const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
  
  const s = "MXLLIXCM"
var romanToInt = function(s) {
    let converter = 0;
    
    for(let i=0; i <s.length; i++){
    if(s[i] === 'I' && s[i+1] === 'V'){
        converter+=4;
        i++;
    }
        
        else if (s[i] === 'I' && s[i+1] === 'X') {
          converter+=9;
          i++  
        }
        
        else if(s[i] === "X" && [s+1] === "L"){
            converter+=40
            i++
        }
        
        else if(s[i] === "X" && [s+1] === "C"){
            converter+=90
            i++
        }
        
        else if(s[i] === "C" && [s+1] === "D"){
            converter+=400
            i++
        }
        
        else if(s[i] === "C" && [s+1] === "M"){
            converter+=900
            i++
        }
        
        else{
            converter+= romanNumbers[s[i]]
        }
        }
    
        return converter;
    
 };