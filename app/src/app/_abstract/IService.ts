import {Observable}  from "rxjs";
import {IModel} from "./IModel";

export interface IService<T extends IModel>{
    
    getAllItems() :Observable<T[]>
    getItemById(id:number):Observable<T>
    addItem(item: T):Observable<Object>
    updateItem(item: T):Observable<Object>
    deleteItem(id: number):Observable<Object>
}
