import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent {

  @Input()
  c:Contact = new Contact(0,"","","","","","","","","","") 

  @Output()
  onClick: EventEmitter<Contact> = new EventEmitter<Contact>()

  delete(c:Contact){
    this.onClick.emit(c)
  }

}
