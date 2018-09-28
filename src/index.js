module.exports = function getZerosCount(number) {
    var a = 0;
    var b = number/5;
    while (b > 0) {
        a = a+ Math.floor(b);
        b =b/5;
    }
    return a;
}
