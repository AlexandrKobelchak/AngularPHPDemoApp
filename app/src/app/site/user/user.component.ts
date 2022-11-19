import {Component, OnInit}  from "@angular/core";
import {UserService} from "../../_services/UserService";
import {User} from "../../_models/User";

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit{

    public myname= "Alexandr";
    public users = new Array<User>();

    constructor(private userService:UserService) {

    }

    ngOnInit(): void {

        let users=new Array<User>();
        this.userService.getAllItems().subscribe((data:User[])=>{

           data.map(function (val:any, i:number, arr:any[]){

               users.push(new User(val.id, val.firstName, val.lastName, new Date(val.birthday)));
           })
        });

        this.users=users;
    }
}
