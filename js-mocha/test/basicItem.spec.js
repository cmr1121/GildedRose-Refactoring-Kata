var should = require('chai').should();
var { Shop, Item } = require('../src/gilded_rose.js');

describe('basic item', () => {
    before(() => {
        items = [
            new Item('Crap on Toast', 1, 3),
        ]
        gildedRose = new Shop(items);
    });
    describe('Day 0', () => {
        it('should have a name value', () => {
            items[0].should.have.property('name');
            items[0].should.have.property('name').that.is.a('string');
            items[0].name.should.equal('Crap on Toast');
        });

        it('should have a sellIn value', () => {
            items[0].should.have.property('sellIn');
            items[0].should.have.property('sellIn').that.is.a('number');
            items[0].sellIn.should.equal(1);
        });

        it('should have a quality value', () => {
            items[0].should.have.property('quality');
            items[0].should.have.property('quality').that.is.a('number');
            items[0].quality.should.equal(3);
        });
    });
    describe('Day 1', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, basic item sell by >= 0 so quality should reduce by 1', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality - 1);
        });
    });
    describe('Day 2', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, basic item sell by < 0 so quality should reduce by 2', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality - 2);
        });
    });
    describe('Day 3', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        it('at end of day, basic item sell by < 0 so quality should reduce by 2 but can not go negative', () => {
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal((expectedQuality - 2) > 0 ? expectedQuality - 2 : 0);
        });
    });
});

