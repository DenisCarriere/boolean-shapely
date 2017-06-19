#!/usr/bin/env python
"""Shapely helper script for Boolean validation"""

import sys
import json
from shapely.geometry import asShape

def shapely(operation, geometry1, geometry2):
    geometry1 = asShape(json.loads(geometry1))
    geometry2 = asShape(json.loads(geometry2))

    if operation == 'crosses':
        print(geometry1.crosses(geometry2))
    elif operation == 'contains':
        print(geometry1.contains(geometry2))
    elif operation == 'within':
        print(geometry1.within(geometry2))
    elif operation == 'equals':
        print(geometry1.equals(geometry2))
    elif operation == 'touches':
        print(geometry1.touches(geometry2))
    elif operation == 'disjoint':
        print(geometry1.disjoint(geometry2))
    elif operation == 'intersects':
        print(geometry1.intersects(geometry2))
    elif operation == 'overlaps':
        print(geometry1.overlaps(geometry2))
    elif operation == 'covers':
        print(geometry1.covers(geometry2))

if __name__ == '__main__':
    OPERATION = sys.argv[1]
    FEATURE1 = sys.argv[2]
    FEATURE2 = sys.argv[3]
    shapely(OPERATION, FEATURE1, FEATURE2)
