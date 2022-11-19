import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Service} from "../_generic/Service";
import {IService} from "../_abstract/IService";
import {User} from "../_models/User";

@Injectable({
    providedIn: "root"
})
export  class UserService extends Service<User> implements IService<User>{

    constructor(http: HttpClient) {
        super(http);
        this.baseUrl="http://api.spd011.com/User";
    }
}

