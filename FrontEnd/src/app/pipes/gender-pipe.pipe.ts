import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.toLowerCase() === "male"){
      return "Mr."
    }
    else{
      return "Ms."
    }
  }
}
