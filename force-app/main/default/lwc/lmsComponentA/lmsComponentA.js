import { LightningElement, wire } from 'lwc';
import FUSION from '@salesforce/messageChannel/FusionsoftMessageChannel__c'
import { MessageContext , publish} from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
@wire(MessageContext)
context;
inputValue;

inputHandler(event){
    this.inputValue=event.target.value;
}
publishMessage(){
    const message={
        vmsData:{
        value:this.inputValue
        }
        
    };
    publish(this.context,FUSION,message)
}

}