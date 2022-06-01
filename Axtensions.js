return {
    before: function (temp, left, including = false) {
        const i = temp.indexOf(left);
        return -1 === i ? temp : temp.substring(0, i + (including ? 1 : 0));
    },
    between: function (temp, begin, end, including = false) {
        let left = temp.indexOf(begin);
        if (left < 0)
            return '';
        left += begin.length;
        const right = end === void 0 ? temp.length : temp.indexOf(end, left);
        if (right < 0)
            return '';
        return including ? begin + temp.substring(left, right) + end : temp.substring(left, right);
    }
};
