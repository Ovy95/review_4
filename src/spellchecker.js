class Megasoft {

 spellchecker(sentence){
  var incorrect = "~"
  var wordbank = ["cat","The","dog","barked","These", "words" ,"are", "spelt", "correctly" ]

 var sentenceArr = sentence.split(" ")
 for ( var i=0; i < sentenceArr.length;i++) {
  sentence
  if (!wordbank.includes(sentenceArr[i])){
    sentenceArr[i] = incorrect + sentenceArr[i] + incorrect
    }
  }
 return sentence = sentenceArr.join(" ")
  
 }
 


}