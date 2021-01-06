export function formatterNumber (number){
    let num = (number || 0).toString(),
        result = '';
    //判断是否带小数点
    if (num.split('.')[1]) {
        let numInt = num.split('.')[0],
            numFlo = num.split('.')[1];
        result = formatter(numInt) + '.' + numFlo
    } else {
        result = formatter(num);
    }
    return result;
    function formatter(numInt) {
        let resultInt = '';
        while (numInt.length > 3) {
            resultInt = ',' + numInt.slice(-3) + resultInt;
            numInt = numInt.slice(0, numInt.length - 3);
        }
        if (numInt) {
            resultInt = numInt + resultInt;
        }
        return resultInt;
    }
}