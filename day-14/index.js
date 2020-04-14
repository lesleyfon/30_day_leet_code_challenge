
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let stringArray = s.split("");

    for (let i = 0; i < shift.length; i++) {
        if(shift[i][0]===0){
            const copy = stringArray.splice(0, shift[i][1]);
            stringArray.push(...copy)
        }else{
            const copy = stringArray.splice(stringArray.length - shift[i][1], shift[i][1])
            stringArray.unshift(...copy)
        }
    }

    return stringArray.join('')
};