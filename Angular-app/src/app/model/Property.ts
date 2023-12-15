import { IPropertyBase } from "./IPropertyBase";

export class Property implements IPropertyBase{
    Id!: number | null;
    Name!: string;
    SellRent!: number | null;
    PType!: string;
    Address!: string;
    Address2?: string;
    FType!: string;
    Price!: number | null;
    BHK!: number | null;
    BuiltArea!: number | null;
    City!: string;
    RTM!: number | null;
    Image?: string | undefined;
    estPossessionOn?: string | undefined;
    Security?:number|null;
    Maintenance?:number|null;
    MainEntrance!:string;
    Gated?:number|null;
    CarpetArea?:number|null;
    PostedBy?:number|null;
    FloorNos?:string;
    TotalFloor?:string;
    AOP?:string;
    Posession?:string;
    Description?:string;
    PostedOn?:string;
}
