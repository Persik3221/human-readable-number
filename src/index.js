const first_numb = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const first_twenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

module.exports = function toReadable(number) {
    let res = '';
    if (!number) res = 'zero';
    else {
        if (number > 99) {
            res += (first_numb[Math.floor(number / 100)] + ' hundred');
        }
        number = number % 100;
        if (number) {
            if (res) res += ' ';
            if (number > 19) {
                res += tens[Math.floor(number / 10)];
                if (Math.floor(number % 10) != 0) res += ' ' + first_numb[Math.floor(number % 10)];
            } else {
                if (number > 9) res += first_twenty[Math.floor(number % 10)];
                else res += first_numb[Math.floor(number % 10)];
            }
        }
    }
    return res;
}
