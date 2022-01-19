module.exports = function reverse(n) {
    n = Math.abs(n);
    let result = n.toString().split('').reverse().join('');

    if (n > 0) {
        return result;

    } else {
        return -result;
    }
}
