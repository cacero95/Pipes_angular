import { Pipe, PipeTransform } from '@angular/core';
// permite hacer un request seguro
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanetataizer:DomSanitizer){

  }
  transform(value: any, args?: any): SafeResourceUrl {
    return this.domSanetataizer.bypassSecurityTrustResourceUrl(value);
  }

}
