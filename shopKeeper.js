const items = require("./magicItems.json");

const shopKeeper = () => {
  const range = { Uncommon: 61, Rare: 31, VeryRare: 11, Legendary: 1 };

  const shopSize = 10;

  let shop = [];
  let shopRarities = {
    Uncommon: 0,
    Rare: 0,
    VeryRare: 0,
    Legendary: 0,
  };

  for (let i = 0; i < shopSize; i++) {
    const determineRarity = Math.ceil(Math.random() * 100);
    if (determineRarity >= range.Uncommon) {
      shopRarities["Uncommon"]++;
    } else if (determineRarity >= range.Rare) {
      shopRarities["Rare"]++;
    } else if (determineRarity >= range.VeryRare) {
      shopRarities["VeryRare"]++;
    } else {
      shopRarities["Legendary"]++;
    }
  }

  const itemFilter = (itemArr, rarity) => {
    return itemArr.filter((item) => item.rarity === rarity);
  };

  for (let key in shopRarities) {
    const possibleItems = itemFilter(items, key);
    while (shopRarities[key] > 0) {
      const itemIndex = Math.floor(Math.random() * possibleItems.length);
      shop.push(possibleItems[itemIndex]);
      shopRarities[key]--;
    }
  }

  return shop;
};

module.exports = shopKeeper;
