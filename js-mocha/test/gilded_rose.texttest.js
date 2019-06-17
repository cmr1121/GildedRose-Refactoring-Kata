var { Shop, Item } = require('../src/gilded_rose.js');
var fs = require('fs');
const output_file = 'stdout.gr';

var items = [
    new Item(name = "+5 Dexterity Vest", sell_in = 10, quality = 20),
    new Item(name = "Aged Brie", sell_in = 2, quality = 0),
    new Item(name = "Elixir of the Mongoose", sell_in = 5, quality = 7),
    new Item(name = "Sulfuras, Hand of Ragnaros", sell_in = 0, quality = 80),
    new Item(name = "Sulfuras, Hand of Ragnaros", sell_in = -1, quality = 80),
    new Item(name = "Backstage passes to a TAFKAL80ETC concert", sell_in = 15, quality = 20),
    new Item(name = "Backstage passes to a TAFKAL80ETC concert", sell_in = 10, quality = 49),
    new Item(name = "Backstage passes to a TAFKAL80ETC concert", sell_in = 5, quality = 49),
    new Item(name = "Conjured Mana Cake", sell_in = 3, quality = 6)
];

var gildedRose = new Shop(items);

if (process.argv.length !== 3) {
    console.error('Exactly one argument required');
    process.exit(1);
}

var days = Number(process.argv[2]) + 1;
var output = "";
for (day = 0; day < days; day++) {
    output += '----------- day ' + day + ' ---------------\n';
    output += 'name, sellIn, quality\n';
    items.forEach((item) => {
        output += item.name + ", " + item.sellIn + ", " + item.quality + '\n';
    });
    output += '\n';
    gildedRose.updateQuality();
};
fs.writeFile(output_file, output, (err) => {
    if (err) throw err;
});
