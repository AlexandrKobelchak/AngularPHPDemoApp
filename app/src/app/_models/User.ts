import {IModel} from "../_abstract/IModel";

export class User implements IModel{

    public id: number;
    public firstName:string;
    public lastName:string;
    public birthday:Date;

    constructor(id: number, firstName: string, lastName: string, birthday: Date) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}