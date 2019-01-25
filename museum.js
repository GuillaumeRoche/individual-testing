
// This solution will be really slow on large dataset
// Try divise and conquer to optimize it
const L = readline();
const N = parseInt(readline());
const dict = {
    'A' : '.-',
    'B' : '-...',
    'C' : '-.-.',
    'D' : '-..',
    'E' : '.',
    'F' : '..-.',
    'G' : '--.',
    'H' : '....',
    'I' : '..',
    'J' : '.---',
    'K' : '-.-',
    'L' : '.-..',
    'M' : '--',
    'N' : '-.',
    'O' : '---',
    'P' : '.--.',
    'Q' : '--.-',
    'R' : '.-.',
    'S' : '...',
    'T' : '-',
    'U' : '..-',
    'V' : '...-',
    'W' : '.--',
    'X' : '-..-',
    'Y' : '-.--',
    'Z' : '--..'
};
var nbFound = 0;
var words = [];

// Read each words, if there are not found at least once in the string, then remove it
// This way we remove useless datas in dictionnary
for (let i = 0; i < N; i++) {
    const W = readline();
    var str = '';
    for (var j = 0; j < W.length; ++j) {
        str += dict[W[j]];
    }
    if (str.length <= L.length && L.indexOf(str) > -1)
        words.push(str);
}
const totalLength = L.length;
const wordsLength = words.length;

// This returns  -1 if the given word is not at the given position
// else returns the new position (old position + word length)
function checkWordAtPos(word, pos) {
    if (L.slice(pos, pos + word.length) == word) {
        return pos + word.length;
    }
    return -1;
}
// recursively checks the next word and increments the number of found sentences if it's correct
function checkNextWord (pos) {
    for (var i = 0; i < wordsLength; ++i) {
        var currentStrLength = checkWordAtPos(words[i], pos);
        if (currentStrLength === totalLength) nbFound++;
        else if (currentStrLength > pos) checkNextWord(currentStrLength);
    }
}
// Iterate over all words but only recursively check if the first word fits at the beggining of the sentence
for (var i = 0; i < wordsLength; ++i) {
    var currentStrLength = checkWordAtPos(words[i], 0);
    if (currentStrLength > 0) {
        if (currentStrLength === totalLength) nbFound++;
        checkNextWord(currentStrLength);
    }
}
print(nbFound);
