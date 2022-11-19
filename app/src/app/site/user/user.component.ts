import {Component}  from "@angular/core";
import {UserService} from "../../_services/UserService";


@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})
export class UserComponent{

    public myname= "Alexandr";

    constructor(private userService:UserService) {
        
    }
}
