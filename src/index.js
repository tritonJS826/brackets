module.exports = function check(str, bracketsConfig) {
    let stackArr = [];
    let answer = true;
    str.split('').forEach((elem) => {
        //если стек пуст
        if (stackArr.length === 0 && isFirstBracket(elem, bracketsConfig)) {
            stackArr.push(elem);
        } else

        if (stackArr.length === 0 && isSecondBracket(elem, bracketsConfig)) {
            answer = false;
        } else
        //если стек не пуст
        if (stackArr.length !== 0 && isPair(stackArr[stackArr.length - 1], elem, bracketsConfig)) {
          stackArr.pop();
        } else
        if (stackArr.length !== 0 && isFirstBracket(elem, bracketsConfig)) {
          stackArr.push(elem);
        } else
        if (stackArr.length !== 0 && isSecondBracket(elem, bracketsConfig)) {
            answer = false;
        };
    });
    if (stackArr.length !== 0) answer =false;
    return answer;
}




function isPair(bracket1, bracket2, bracketsConfig) {
    let answer = false;
    bracketsConfig.forEach(arr => {
        if (bracket1 == arr[0] && bracket2 == arr[1]) answer = true;
    });
    return answer;
}

function isSecondBracket(bracket, bracketsConfig) {
    let answer = false;
    bracketsConfig.forEach(arr => {
        if (bracket == arr[1]) answer = true;
    });
    return answer;
}

function isFirstBracket(bracket, bracketsConfig) {
    let answer = false;
    bracketsConfig.forEach(arr => {
        if (bracket == arr[0]) answer = true;
    });
    return answer;
}
