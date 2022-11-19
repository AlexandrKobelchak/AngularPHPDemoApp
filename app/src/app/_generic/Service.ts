import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, first, mergeMap, shareReplay} from "rxjs";
import {IModel} from "../_abstract/IModel";
import {IService} from "../_abstract/IService";


@Injectable({
    providedIn: 'root'
})
export class Service<T extends IModel> implements IService<T>{

    private allItems?: Observable<T[]> | null;
    protected baseUrl!: string;

    constructor(private http: HttpClient) {

    }

    getAllItems(): Observable<T[]> {

        if(this.allItems==null){

            this.allItems = this.http.get<T[]>(this.baseUrl).pipe(shareReplay());
        }
        return this.allItems;
    }

    addItem(item: T): Observable<Object> {

        return this.http.post(this.baseUrl, item);
    }

    updateItem(item: T): Observable<Object> {

        return this.http.put(this.baseUrl, item);
    }

    deleteItem(id: number): Observable<Object> {

        return this.http.delete([this.baseUrl, "/", id].join())
    }


    getItemById(id: number): Observable<T> {

        return this.getAllItems().pipe(mergeMap(result=>result), first<T>(lan=>lan.id===id));
    }

    clearCache(){

        this.allItems=null;
    }
}