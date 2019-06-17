var {expect, should} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');

should();

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    items[0].name.should.equal('foo');
    //expect(items[0].name).to.equal("fixme");
  });

});
