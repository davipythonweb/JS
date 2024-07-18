function isIsogram(str) {
    str = str.toLowerCase();
    const chars = new Set();
    for (let char of str) {
        if (chars.has(char)) {
            return false;
        } 
        chars.add(char);
    }
    return true;
}

; (() => {
    console.log(isIsogram("Dermatoglyphics"), true);
    console.log(isIsogram("isogram"), true);
    console.log(isIsogram("aba"), false);
    console.log(isIsogram("moOse"), false);
    console.log(isIsogram("isIsogram"), false);
    console.log(isIsogram(""), true);
})()