import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { Subject } from 'rxjs';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

data={
  to:"",
  subject:"",
  message:""
}

  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
   console.log("try to submit form");
   console.log("Data",this.data);

   if(this.data.to==''|| this.data.subject=='' ||this.data.subject==''){
     this.snak.open("fields cannot be empty","ok")
     return;
 
   }

   this.email.sendEmail(this.data).subscribe(
     (     Response: any )=>{
       console.log(Response);

     },
     (     error: any)=>{
       console.log(error);
     }
     
   )

     

  }
}
