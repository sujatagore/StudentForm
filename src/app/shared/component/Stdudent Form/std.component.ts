
import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IGender, Istd } from "../../module/data.interface";



@Component({
    selector : 'app-std',
    templateUrl : './std.component.html',
    styleUrls : ['./std.component.scss']
})

export class StdTDFormComponent{

    std : Istd = {
            "fname": "Jhon",
            "lname": "Doe",
            "email": "jD@gmail.com",
            "contact": 1234567890,
            "secQue": "favouritePlace",
            "ans": "Thailand",
            "isAccept": true,
            "gender": "Male"
        }

    gender : Array<IGender> = [
        {
            gen : 'Male',
            id : 1
        },

        {
            gen : 'Female',
            id : 2
        }
    ]

    @ViewChild('logIn') logInRef !: NgForm

    onLogin(){
        console.log(this.logInRef.value)
        this.logInRef.reset()
    }

    onEdit(){
        this.logInRef.form.patchValue(this.std)
    }
}