import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'contact-by-id',
  templateUrl: './contact-by-id.component.html',
  styleUrls: ['./contact-by-id.component.css']
})
export class ContactByIdComponent {
  contact: Contact = new Contact(0,"","","","","","","","","","")
  constructor(private cs: ContactService, private activatedRoute:ActivatedRoute){}
  ngOnInit(){
    this.activatedRoute.params.subscribe(d => {
      let id = d["id"]
      this.cs.getContactById(id).subscribe(da => this.contact=da)
    })
  }
}
