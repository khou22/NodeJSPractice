var _ = require('underscore'); //Require the module
var syllable = require('syllable');
// console.log(_) //Return the module's content
if (_ != undefined) {
  console.log("'underscore' module was imported successfully");
}

/*Local Syllable Function*/
function new_count(word) {
  word = word.toLowerCase();                                     //word.downcase!
  if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
  return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
}

console.log("Hello from module1");
console.log("To check node version run: 'node -v'");


var data = "Hello my name is Kevin. I am easy to read.";

var sentences = data.split("."); //Split at period
var words = data.split(" ");
var totalSentences = data.charAt(data.length - 1) == "." ? sentences.length - 1 : sentences.length; //Number of sentences
var totalWords = words.length; //Split at spaces
var totalSyllables = 0;
for (var i = 0; i < words.length; i++) {
  totalSyllables += syllable(words[i]); //Add to total
}

console.log(" "); //Line break

console.log("Data:");
console.log("Sentences", totalSentences)
console.log("Words", totalWords)
console.log("Syllables", totalSyllables);

console.log(" "); //Line break

var readingEase = 206.835 - (1.015 * (totalWords/totalSentences)) - (84.6 * (totalSyllables/totalWords));
var fleschKincaid = (.39 * (totalWords/totalSentences)) + (11.8 * (totalSyllables/totalWords)) - 15.59;

//Gunning-Fog method requires only about 100 words
//Coleman-Liau method uses letters per 100 words and sentences per 100 words

//SMOG only works with at least 30 sentences
var numPolysyllables = 0; //What is a polysyllable?
var smogIndex = (1.043 * Math.sqrt((numPolysyllables * 30)/totalSentences)) + 3.1291;

console.log("Reading ease key:")
console.log("90.0–100.0  easily understood by an average 11-year-old student");
console.log("60.0–70.0 easily understood by 13- to 15-year-old students");
console.log("0.0–30.0  best understood by university graduates");

console.log(" "); //Line break

console.log("Reading ease:", readingEase);
console.log("Grade level:", fleschKincaid);