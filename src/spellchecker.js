class Megasoft {

 spellchecker(sentance){
  var incorrect = "~"
  var wordbank = ["cat","The","dog","barked","These", "words" ,"are", "spelt", "correctly" ]

 var sentanceArr = sentance.split(" ")
 for ( var i=0; i < sentanceArr.length;i++) {

  if (!wordbank.includes(sentanceArr[i])){
    sentanceArr[i] = incorrect + sentanceArr[i] + incorrect
    console.log(sentanceArr[i])
  }
}

 return sentance = sentanceArr.join(" ")
  
 }
 


}