var should = require('chai').should();
var { Shop, Item } = require('../src/gilded_rose.js');

describe.only('Backstage Passes', () => {
    before(() => {
        items = [
            new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20),
        ]
        gildedRose = new Shop(items);
    });
    describe('Day 0', () => {
        it('should have a name value', () => {
            items[0].should.have.property('name');
            items[0].should.have.property('name').that.is.a('string');
            items[0].name.should.equal('Backstage passes to a TAFKAL80ETC concert');
        });

        it('should have a sellIn value', () => {
            items[0].should.have.property('sellIn');
            items[0].should.have.property('sellIn').that.is.a('number');
            items[0].sellIn.should.equal(11);
        });

        it('should have a quality value', () => {
            items[0].should.have.property('quality');
            items[0].should.have.property('quality').that.is.a('number');
            items[0].quality.should.equal(20);
        });
    });
    
    describe('Day 1', ()=>{
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });

        it(('Quality should adjust by 1 when sellin > 10'), () => {
            var qualityAdjustment = 1;
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality + (qualityAdjustment == 0 ? -expectedQuality : qualityAdjustment));
        });
    });
    describe('Day 2 - 6', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        after(()=>{
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
        });
        it(('Quality should adjust by 2 when sellin <= 10'), () => {
            var qualityAdjustment = 2;
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality + (qualityAdjustment == 0 ? -expectedQuality : qualityAdjustment));
        });
    });

    describe('Day 7 - 11', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });
        after(() => {
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
            gildedRose.updateQuality();
        });

        it(('Quality should adjust by 3 when sellin <= 5'), () => {
            var qualityAdjustment = 3;
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality + (qualityAdjustment == 0 ? -expectedQuality : qualityAdjustment));
        });
    });

    describe('Day > 11', () => {
        before(() => {
            expectedName = items[0].name;
            expectedSellin = items[0].sellIn;
            expectedQuality = items[0].quality;
            gildedRose.updateQuality();
        });

        it(('Quality should adjust to 0 when sellin < 0'), () => {
            var qualityAdjustment = 0;
            items[0].name.should.equal(expectedName);
            items[0].sellIn.should.equal(expectedSellin - 1);
            items[0].quality.should.equal(expectedQuality + (qualityAdjustment == 0 ? -expectedQuality : qualityAdjustment));
        });
    });
});
