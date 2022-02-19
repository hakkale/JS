function sameStings(firstStr, secondStr) {
    let first = firstStr.split('');
    let second = secondStr.split('');
    first.sort();
    second.sort();
    let f = first.join();
    let s = second.join();
    return f === s;
}