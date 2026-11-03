const fs = require('fs');
const { loadData, addSeason } = require('./series-helpers');

const data = loadData();
const newSeries = addSeason(data.series, 'Desert Signal');
const newData = { ...data, series: newSeries };

fs.writeFileSync('series-updated.json', JSON.stringify(newData, null, 2));