const before = (temp, left, including = false) => {
    const i = temp.indexOf(left);
    return -1 === i ? temp : temp.substring(0, i + (including ? 1 : 0));
};
