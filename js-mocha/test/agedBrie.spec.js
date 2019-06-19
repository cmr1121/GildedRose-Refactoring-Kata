var should = require('chai').should();
var { Shop, Item } = require('../src/gilded_rose.js');

describe('Aged Brie', () => {
    before(() => {
        items = [
            new Item("Aged Brie", 1, 46),
        ]
        gildedRose = new Shop(items);
    });
    describe('Day 0', () => {
        it('should have a name value', () => {
            items[0].should.have.property('name');
            items[0].should.have.property('name').that.is.a('string');
            items[0].name.should.equal('Aged Brie');
        });

        it('should have a sellIn value', () => {
            items[0].should.have.property('sellIn');
            items[0].should.have.property('sellIn').that.is.a('number');
            items[0].sellIn.should.equal(1);
        });

        it('should have a quality value', () => {
            items[0].should.have.property('quality');
            items[0].should.have.property('quality').that.is.a('number');
            items[0].quality.should.equal(46);
        });
    });
    describe('Day 1', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, aged brie increases in quality', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality +1);
        });
    });
    describe('Day 2', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, aged brie sell by < 0 so quality should increase by 2', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality + 2);
        });
    });
    describe('Day 3', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, aged brie < 0 so quality should increase by 2 but not go higher than 50', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal((expectedQuality + 2) <= 50 ? expectedQuality + 2 : 50);
        });
    });
});