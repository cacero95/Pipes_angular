import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, tick: boolean): string {
    let result = '';
    if(tick){
      for(let letter = 0; letter <= value.length; letter++){
        result+='x'
      }
    }
    else {
      result = value;
    }
    
    return result;
  }

}
