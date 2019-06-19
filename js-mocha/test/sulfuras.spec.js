var should = require('chai').should();
var { Shop, Item } = require('../src/gilded_rose.js');

describe('Sulfuras, Hand of Ragnaros', () => {
    before(() => {
        items = [
            new Item('Sulfuras, Hand of Ragnaros', 1, 180),
        ]
        gildedRose = new Shop(items);
    });
    describe('Day 0', () => {
        it('should have a name value', () => {
            items[0].should.have.property('name');
            items[0].should.have.property('name').that.is.a('string');
            items[0].name.should.equal('Sulfuras, Hand of Ragnaros');
        });

        it('should have a sellIn value', () => {
            items[0].should.have.property('sellIn');
            items[0].should.have.property('sellIn').that.is.a('number');
            items[0].sellIn.should.equal(1);
        });

        it('should have a quality value', () => {
            items[0].should.have.property('quality');
            items[0].should.have.property('quality').that.is.a('number');
            items[0].quality.should.equal(180);
        });
    });
    describe('Day 1', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, sulfuras does not increase in quality or reduce in sell by', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin);
            items[0].quality.should.equal(expectedQuality);
        });
    });
    describe('Day 2', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, sulfuras does not increase in quality or reduce in sell by', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin);
            items[0].quality.should.equal(expectedQuality);
        });
    });
});