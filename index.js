const PythonShell = require('python-shell')

/**
 * Boolean Shapely helper script
 * https://en.wikipedia.org/wiki/DE-9IM
 *
 * @private
 * @param {string} operation ("crosses", "contains")
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const operation = 'crosses';
 * const feature1 = lineString([[-2, 2], [1, 1]]);
 * const feature2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely(operation, feature1, feature2)
 *     .then(result => console.log(result));
 */
function shapely(operation, feature1, feature2) {
    // Convert Feature to Geometry
    if (feature1.geometry) feature1 = feature1.geometry;
    if (feature2.geometry) feature2 = feature2.geometry;

    const options = {
        scriptPath: __dirname,
        args: [
            operation,
            JSON.stringify(feature1),
            JSON.stringify(feature2)
        ]
    };

    return new Promise((resolve, reject) => {
        const pyshell = new PythonShell('index.py', options);
        pyshell.on('message', message => {
            return resolve(message === 'True');
        });
        pyshell.end(error => {
            if (error) throw error;
            return reject(error);
        });
    });
};

/**
 * Shapely Crosses
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.crosses(line1, line2)
 *     .then(result => console.log(result));
 */
function crosses(feature1, feature2) {
    return shapely('crosses', feature1, feature2)
}

/**
 * Shapely Contains
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.contains(line1, line2)
 *     .then(result => console.log(result));
 */
function contains(feature1, feature2) {
    return shapely('contains', feature1, feature2)
}

/**
 * Shapely Within
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.within(line1, line2)
 *     .then(result => console.log(result));
 */
function within(feature1, feature2) {
    return shapely('within', feature1, feature2)
}

/**
 * Shapely Equals
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.equals(line1, line2)
 *     .then(result => console.log(result));
 */
function equals(feature1, feature2) {
    return shapely('equals', feature1, feature2)
}

/**
 * Shapely Touches
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.touches(line1, line2)
 *     .then(result => console.log(result));
 */
function touches(feature1, feature2) {
    return shapely('touches', feature1, feature2)
}

/**
 * Shapely Disjoint
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.disjoint(line1, line2)
 *     .then(result => console.log(result));
 */
function disjoint(feature1, feature2) {
    return shapely('disjoint', feature1, feature2)
}

/**
 * Shapely Intersects
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.intersects(line1, line2)
 *     .then(result => console.log(result));
 */
function intersects(feature1, feature2) {
    return shapely('intersects', feature1, feature2)
}

/**
 * Shapely Overlaps
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.overlaps(line1, line2)
 *     .then(result => console.log(result));
 */
function overlaps(feature1, feature2) {
    return shapely('overlaps', feature1, feature2)
}

/**
 * Shapely Covers
 *
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature
 * @returns {Promise<Boolean>} true/false
 * @example
 * const line1 = lineString([[-2, 2], [1, 1]]);
 * const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 *
 * shapely.covers(line1, line2)
 *     .then(result => console.log(result));
 */
function covers(feature1, feature2) {
    return shapely('covers', feature1, feature2)
}

module.exports = {
    crosses,
    contains,
    within,
    equals,
    touches,
    disjoint,
    intersects,
    overlaps,
    covers
}