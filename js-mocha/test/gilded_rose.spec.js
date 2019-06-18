var { expect, should } = require('chai');
var { Shop, Item } = require('../src/gilded_rose.js');

should();

describe("Gilded Rose", function () {
  var gildedRose, items

  before(() => {
    items = [
      new Item('Crap on Toast', 1, 3),
    ]
    gildedRose = new Shop(items);
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
  
  describe('Day +1', () => {
    it('before end of day, item(s) should match original values', () => {
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(1);
      items[0].quality.should.equal(3);
    });
    it('at end of day, basic item sell by >= 0 so quality should reduce by 1', () => {
      gildedRose.updateQuality();
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(0);
      items[0].quality.should.equal(2);
    });

  });
  describe('Day +2', () => {
    it('at end of day, basic item sell by < 0 so quality should reduce by 2', () => {
      gildedRose.updateQuality();
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(-1);
      items[0].quality.should.equal(0);
    });
  });
  describe('Day +3', () => {
    it('at end of day, basic item sell by < 0 so quality should reduce by 2 but can not go negative', () => {
      gildedRose.updateQuality();
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(-2);
      items[0].quality.should.equal(0);
    });
  });
});
