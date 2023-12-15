export interface IPropertyBase {
    Id:number|null;
    Name:string;
    SellRent:number |null;
    PType:string;
    FType:string;
    Price:number |null;
    BHK:number |null;
    BuiltArea:number |null;
    City:string;
    RTM:number |null;
    Image?:string;
    estPossessionOn?: string;
}
