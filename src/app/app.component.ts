import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='iron man';
  name2 = 'cArlos aCero';
  array = [1,2,3,4,5,6,7,8,9];
  PI:number = Math.PI;
  porcentage: number = 0.234;
  salary:number = 1234.5;
  heroe = {
    name:'Andres',
    key:'Spider man',
    age:500,
    address: {
      street:'first',
      house:20
    }
  };
  activar:boolean = false;
  video_url ='https://www.youtube.com/embed/BHhmJZmz5Is';
  valor_promesa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('data received');
    },4500)
  });
  date = new Date();
}
