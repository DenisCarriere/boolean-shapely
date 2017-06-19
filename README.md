# Boolean Shapely

Primarly used for TurfJS boolean testing.

## Install

```
$ python --version
Python 2.7.10
$ pip install shapely
$ yarn add --dev boolean-shapely
```

## Quickstart

```javascript
const shapely = require('boolean-shapely');

const line1 = lineString([[-2, 2], [1, 1]]);
const line2 = lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);

shapely.crosses(line1, line2);
    .then(result => console.log(result));
//= true/false
```

## DE-9IM

- [x] crosses
- [x] contains
- [x] within
- [x] equals
- [x] touches
- [x] disjoint
- [x] intersects
- [x] overlaps
- [x] covers
