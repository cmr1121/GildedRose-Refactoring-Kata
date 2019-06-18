var { expect, should } = require('chai');
var { Shop, Item } = require('../src/gilded_rose.js');

should();

describe("Gilded Rose", function () {
  var gildedRose, items

  before(() => {
    items = [
      new Item('Crap on Toast', 1, 3),
      new Item("Aged Brie", 1, 46),
      new Item('Sulfuras, Hand of Ragnaros', 0, 180),
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

    it('at end of day, aged brie increases in quality', () => {
      items[1].name.should.equal('Aged Brie');
      items[1].sellIn.should.equal(0);
      items[1].quality.should.equal(47);
    });

    it('at end of day, sulfuras does not increase in quality or reduce in sell by', () => {
      items[2].name.should.equal('Sulfuras, Hand of Ragnaros');
      items[2].sellIn.should.equal(0);
      items[2].quality.should.equal(180);
    });
  });
  describe('Day +2', () => {
    it('at end of day, basic item sell by < 0 so quality should reduce by 2', () => {
      gildedRose.updateQuality();
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(-1);
      items[0].quality.should.equal(0);
    });
    it('at end of day, aged brie sell by < 0 so quality should increase by 2', () => {
      items[1].name.should.equal('Aged Brie');
      items[1].sellIn.should.equal(-1);
      items[1].quality.should.equal(49);
    });
    it('at end of day, sulfuras does not increase in quality or reduce in sell by', () => {
      items[2].name.should.equal('Sulfuras, Hand of Ragnaros');
      items[2].sellIn.should.equal(0);
      items[2].quality.should.equal(180);
    });
  });
  describe('Day +3', () => {
    it('at end of day, basic item sell by < 0 so quality should reduce by 2 but can not go negative', () => {
      gildedRose.updateQuality();
      items[0].name.should.equal('Crap on Toast');
      items[0].sellIn.should.equal(-2);
      items[0].quality.should.equal(0);
    });
    it('at end of day, aged brie < 0 so quality should increase by 2 but not go higher than 50', () => {
      items[1].name.should.equal('Aged Brie');
      items[1].sellIn.should.equal(-2);
      items[1].quality.should.equal(50);
    });
    it('at end of day, sulfuras does not increase in quality or reduce in sell by', () => {
      items[2].name.should.equal('Sulfuras, Hand of Ragnaros');
      items[2].sellIn.should.equal(0);
      items[2].quality.should.equal(180);
    });
  });
});
