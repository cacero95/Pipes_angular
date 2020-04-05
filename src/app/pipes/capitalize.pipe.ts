import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizePipe implements PipeTransform {
  // if all is true, the pipe convert all the sentences to uppercase
  // otherwise only the first letter on each word go to uppercase
  transform(value: string, all:boolean = true): string {
    value = value.toLocaleLowerCase();
    console.log(value);
    let words = value.split(' ');
    if(all){
      // this create an array with the words received but the first letter will be on capitalize form
      // the substr will cut the word and return the word from a determinate position
      words = words.map(word=>{
        return word[0].toUpperCase() + word.substr(1);
      });
      
      // the function join all items of the array in a one
      return words.join(' ');
    }
    else {
      // [0][0] la primera posicion y en este caso la primera posicion del item en este caso la primera letra de la palabra
      
      words[0] = words[0][0].toUpperCase() + words[0].substr(1);
      console.log(words);
      return words.join(' '); 
    }
  }

}
