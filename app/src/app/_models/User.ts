import {IModel} from "../_abstract/IModel";

export class User implements IModel{

    // @ts-ignore
    public id: number;

    // @ts-ignore
    public firstName:string;

    // @ts-ignore
    public lastName:string;

    // @ts-ignore
    public birthday:Date;
}