const test = require('tape');
const {lineString, polygon} = require('@turf/helpers');
const shapely = require('./');

test('boolean-shapely', t => {
    const feature1 = lineString([[-2, 2], [1, 1]]);
    const feature2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
    const feature3 = polygon([[[-1, 2], [3, 2], [3, 3], [-1, 3], [-1, 2]]]);

    // false
    shapely.crosses(feature1, feature2).then(result => t.false(result));

    // true
    shapely.crosses(feature2, feature3).then(result => t.true(result));
    t.end();
});
