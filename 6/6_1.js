var tk = [NaN, 0, 15, false, -22, "", undefined, 47, null]
//tk identify old array
console.log('Array Before: ' + tk)
console.log('Array Length: ' + tk.length)
// newtk identify new array
var nulified = [NaN, 0, false, '', undefined, null]
var newtk = tk.filter(function (val) {
    return !nulified.includes(val);
});
console.log('Array After: ' + newtk)
console.log('Array Length: ' + newtk.length)