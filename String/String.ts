/**
 * String before left
 * @param  {string} temp
 * @param  {string} left
 * @param  {boolean=false} including
 */
function before(temp: string, left: string, including: boolean = false) {
    const i = temp.indexOf(left);
    return -1 === i ? temp : temp.substring(0, i + (including ? 1 : 0));
}
/**
 * String between begin and end, optionally caseless
 * @param  {string} temp
 * @param  {string} begin
 * @param  {string} end
 * @param  {boolean=false} including
 */
function between(temp: string, begin: string, end: string, including: boolean = false) {
    let left = temp.indexOf(begin);
    if (left < 0)
        return '';
    left += begin.length;
    const right = end === void 0 ? temp.length : temp.indexOf(end, left);
    if (right < 0)
        return '';
    return including ? begin + temp.substring(left, right) + end : temp.substring(left, right);
}