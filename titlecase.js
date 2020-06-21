String.prototype.titleCase = function (){
    let arrayWord = sentence.split(' ')
    for(i = 0; i < arrayWord.length; i++){
        arrayWord[i] = arrayWord[i].slice(0,1).toUpperCase() + arrayWord[i].slice(1)
    };
    return arrayWord.join(" ");
} 
let sentence = 'Juan Salao Biantong';
console.log(sentence.titleCase());
