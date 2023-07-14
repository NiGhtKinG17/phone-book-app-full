import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = []
  baseUrl: string="http://localhost:5249/api/PhoneBookContact/"

  constructor(private http:HttpClient) {
    
  //   this.contacts.push(new Contact(1, "Diva", "Passenger", "Female", "31-02-1989", "indianrailways@ind.com", "81828279291", "Gurgaon", "Unknown", "Antarctica", "./assets/images/2.jpg"))
  //   this.contacts.push(new Contact(2, "Eeshwas", "Biswas", "Male", "22-02-1989", "eeswas@biswas.com", "81828279291", "Dombivli", "Not Maharashtra", "South Pole", "./assets/images/2.jpg"))
  //   this.contacts.push(new Contact(3, "Shembdya", "Shemaroo", "Male", "31-03-1989", "music@gmail.com", "81828279291", "Unknown", "Unknown", "Ohio", "./assets/images/2.jpg"))
  //   this.contacts.push(new Contact(4, "Diva", "Passenger", "Male", "31-02-1989", "indianrailways@ind.com", "81828279291", "Gurgaon", "Unknown", "Antarctica", "./assets/images/2.jpg"))
  //   this.contacts.push(new Contact(5, "Diva", "Passenger", "Male", "31-02-1989", "indianrailways@ind.com", "81828279291", "Gurgaon", "Unknown", "Antarctica", "./assets/images/2.jpg"))
  }

  ngOnInit(){
  
  }

  getAllContacts() {
    return this.http.get<Contact[]>(this.baseUrl+"DisplayContacts")
  }
  getContactById(id:number){
    return this.http.get<Contact>(this.baseUrl+"DisplayContactById/"+id)
  }

  deleteContactById(id:number){
    // const i = this.contacts.findIndex(e => {
    //   e.id===id
    // })
    // this.contacts.splice(i,1)
    return this.http.delete(this.baseUrl+"DeleteContact/"+id)
  }

  addContact(c: Contact){
    return this.http.post(this.baseUrl+"AddContact", c)
  }

  updateContact(c:Contact){
    return this.http.put(this.baseUrl+"UpdateContact/"+c.id, c)
  }
}
