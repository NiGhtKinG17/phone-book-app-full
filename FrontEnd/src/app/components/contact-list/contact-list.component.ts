import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactsCount:number=0
  deletemsg: string = ""
  contacts: Contact[] = []
  filters:Contact[] = []
  
  //contactService: ContactService
  constructor(private cs: ContactService){
    //this.contactService = cs

  }

  ngOnInit(){
    // this.contacts.push(new Contact(1, "Diva", "Passenger", "Female", "31-02-1989", "indianrailways@ind.com", "81828279291", "Gurgaon", "Unknown", "Antarctica", "./assets/images/2.jpg"))
    // this.contacts.push(new Contact(2, "Eeshwas", "Biswas", "Male", "22-02-1989", "eeswas@biswas.com", "81828279291", "Dombivli", "Not Maharashtra", "South Pole", "./assets/images/2.jpg"))
    // this.contacts.push(new Contact(3, "Shembdya", "Shemaroo", "Male", "31-03-1989", "music@gmail.com", "81828279291", "Unknown", "Unknown", "Ohio", "./assets/images/2.jpg"))
    // this.contacts.push(new Contact(4, "Diva", "Passenger", "Male", "31-02-1989", "indianrailways@ind.com", "81828279291", "Gurgaon", "Unknown", "Antarctica", "./assets/images/2.jpg"))
    // this.contacts.push(new Contact(5, "Diva", "Passenger", "Male", "31-02-1989", "indianrailways@ind.com", "81828279291", "Gurgaon", "Unknown", "Antarctica", "./assets/images/2.jpg"))
    this.cs.getAllContacts().subscribe(d => this.contacts=d)
  }


  getAllContactsCount(){
    return this.contacts.length
  }
  getMalesCount(){
    return this.contacts.filter(c => c.gender === "Male").length
  }
  getFemalesCount(){
    return this.contacts.filter(c => c.gender === "Female").length
  }

  filterContacts(event: string){
    // console.log(event);
    if(event !== 'All'){
      this.filters = this.contacts.filter(c => c.gender===event)
    }else{
      this.filters = this.contacts
    }
  }

  deleteContact(event: Contact){
    if(event.id!==undefined){
      let id = event.id
    this.cs.deleteContactById(id).subscribe(d => {
      this.cs.getAllContacts().subscribe(data => this.contacts=data)
    })
    }
    
    this.deletemsg="Contact Deleted Successfully with ID: "+event.id
  }
  @Input()
  index:number=0
}
