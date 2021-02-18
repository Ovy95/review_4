describe("Megasoft", function () {

  var megasoft
  beforeEach(function(){
    megasoft = new Megasoft();
  })

  describe("returns ", function(){

    it("returns uncorrected error for cat spelt ct",function() {
      expect(megasoft.spellchecker("ct")).toEqual("~ct~")
    })

    it("returns two spelling errors for dog and barked",function() {
      expect(megasoft.spellchecker("The dg bakd")).toEqual("The ~dg~ ~bakd~")
    })


    it("returns correctly returns the input which was given",function() {
      expect(megasoft.spellchecker("These words are spnelt correclty")).toEqual("These words are ~spnelt~ ~correclty~")
    })
  })






})