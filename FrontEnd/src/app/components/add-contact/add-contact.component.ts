import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact?: Contact
  constructor(private cs:ContactService, private router:Router){
    this.contact = new Contact(0,"","","","","","","","","","")
  }
  addContact(c: Contact){
    this.cs.addContact(c).subscribe(d => {
      this.router.navigate(["/contact-by-id/"+c.id])
    })
  }
}
