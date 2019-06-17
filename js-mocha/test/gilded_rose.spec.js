var { expect, should } = require('chai');
var { Shop, Item } = require('../src/gilded_rose.js');

should();

describe("Gilded Rose", function () {
  var gildedRose, items
  before(() => {
    gildedRose = new Shop([new Item("foo", 0, 0)]);
    items = gildedRose.updateQuality();
  });

  it('should have a name value', () => {
    items[0].should.have.property('name');
    items[0].should.have.property('name').that.is.a('string');
  });

  it('should have a sellIn value', () => {
    items[0].should.have.property('sellIn');
    items[0].should.have.property('sellIn').that.is.a('number');
  });

  it('should have a quality value', () => {
    items[0].should.have.property('quality');
    items[0].should.have.property('quality').that.is.a('number');
  });

  it("should foo", function () {
    items[0].name.should.equal('foo');
    //expect(items[0].name).to.equal("fixme");
  });

  describe('Day +1', () => {
    before(() => {
      items = [
        new Item('Crap on Toast', 1, 10),
      ]
      gildedRose = new Shop(items);
    });
    it('before end of day, item(s) should match original values', () => {
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(1);
      items[0].quality.should.equal(10);
    });
    it('at end of day, the values should adjust', () => {
      gildedRose.updateQuality();
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(0);
      items[0].quality.should.equal(9);
    });
  });
});


