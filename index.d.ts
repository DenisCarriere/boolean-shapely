/// <reference types="geojson" />

type Feature = GeoJSON.Feature<any> | GeoJSON.GeometryObject;

export declare function crosses(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function contains(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function within(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function equals(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function touches(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function disjoint(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function intersects(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function overlaps(feature1: Feature, feature2: Feature): Promise<boolean>;
export declare function covers(feature1: Feature, feature2: Feature): Promise<boolean>;
