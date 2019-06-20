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
    var qualityAdjustment = 0;
    for (let day = 1; day < 13; day++) {
        describe(`Day ${day}`, () => {
            before(() => {
                expectedName = items[0].name;
                expectedSellin = items[0].sellIn;
                expectedQuality = items[0].quality;
                gildedRose.updateQuality();
                switch (expectedSellin) {
                    case 11:
                        qualityAdjustment = 1;
                        break;
                    case 10:
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                        qualityAdjustment = 2
                        break;
                    case 5:
                    case 4:
                    case 3:
                    case 2:
                    case 1:
                        qualityAdjustment = 3;
                        break;
                    default:
                        qualityAdjustment = 99999;
                        break;
                }
            });

            describe('', () => {
                console.log('QA ', qualityAdjustment);
                it('should adjust by ' + (qualityAdjustment == 99999 ? 0 : qualityAdjustment), () => {
                    items[0].name.should.equal(expectedName);
                    items[0].sellIn.should.equal(expectedSellin - 1);
                    items[0].quality.should.equal(expectedQuality + (qualityAdjustment == 99999 ? -expectedQuality : qualityAdjustment));
                });
            });
        });
    }
});