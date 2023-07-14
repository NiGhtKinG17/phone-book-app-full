import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contact:Contact = new Contact(1, "Jabong", "Bongbong", "Male", "30-02-2002", "jabong@bong.com", "8888888888", "BongWadi", "Bongin", "Bongistan", "./assets/images/1.jpg")
}
