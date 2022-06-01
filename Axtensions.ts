const before = (temp: string, left: string, including: boolean = false): string => {
    const i = temp.indexOf(left);
    return -1 === i ? temp : temp.substring(0, i + (including ? 1 : 0));
}
