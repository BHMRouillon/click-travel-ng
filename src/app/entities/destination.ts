export class Destination {
    constructor(public name: string, public code: string, public weather: string, public isDreamDestination: boolean) {
        
    }

    public static fromJson(json: Object): Destination {
        return new Destination(
            json['name'],
            json['code'],
            json['weather'],
            json['isDreamDestination']
        );
    }
}