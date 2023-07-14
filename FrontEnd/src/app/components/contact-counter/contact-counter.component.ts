import { Component, EventEmitter, INJECTOR, Input, Output } from '@angular/core';

@Component({
  selector: 'contact-counter',
  templateUrl: './contact-counter.component.html',
  styleUrls: ['./contact-counter.component.css']
})
export class ContactCounterComponent {

  @Input()
  all: number = 0

  @Input()
  male: number = 0

  @Input()
  female:number= 0

  @Output()
  onRadioChange: EventEmitter<string>=new EventEmitter<string>()

  setGenderData(gender: string){
    this.onRadioChange.emit(gender)
  }
}
