import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  editForm?: FormGroup
  contact: Contact = new Contact(0,"","","","","","","","","","")

  constructor(private cs:ContactService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(d => {
      let id = d["id"]
      this.cs.getContactById(id).subscribe(da => {
        this.contact = da
        console.log(this.contact.id);
        
        this.editForm = new FormGroup({
          id: new FormControl(this.contact.id),
          firstname: new FormControl(this.contact.firstname),
          lastname: new FormControl(this.contact.lastname),
          gender: new FormControl(this.contact.gender),
          dob: new FormControl(this.contact.dob),
          email: new FormControl(this.contact.email),
          phone: new FormControl(this.contact.phone),
          city: new FormControl(this.contact.city),
          state: new FormControl(this.contact.state),
          country: new FormControl(this.contact.country),
          picture: new FormControl(this.contact.picture)
        })
      })
    })
  }
  saveContact(contact: Contact){
    this.cs.updateContact(contact).subscribe(d =>{ 
      console.log("Record Saved")
      this.router.navigate(["/contact-by-id/"+contact.id])
    }
    
    )
  }
}
