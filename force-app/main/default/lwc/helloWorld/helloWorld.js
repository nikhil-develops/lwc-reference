import Country from '@salesforce/schema/Asset.Country';
import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

     name="Nick Jonas"
     changeName(event){
          this.name=event.target.value;
     }

     @track address={Country:'India',state:'Uttar Pradesh',city:'lucknow'};
     trackProperty(event){
          this.address.city=event.target.value;

     }

     num1=10;
     num2=15;

     get addNumbers(){
          return this.num1+this.num2;
     }
}