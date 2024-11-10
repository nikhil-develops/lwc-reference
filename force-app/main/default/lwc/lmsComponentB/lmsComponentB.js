import { LightningElement,wire } from 'lwc';
import FUSION from '@salesforce/messageChannel/FusionsoftMessageChannel__c'
import { subscribe,unsubscribe ,MessageContext, APPLICATION_SCOPE} from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {

@wire(MessageContext)
context;
subscribe;
receivedMessage;
connectedCallback(){
    this.subscribeMessage();
}
subscribeMessage(){
this.subscribe=subscribe(this.context,FUSION,(message)=>{this.messageHandler(message)},{scope:APPLICATION_SCOPE})
}
messageHandler(message){
    this.receivedMessage=message.vmsData.value?message.vmsData.value:'Sorry No message received!';
}
unsubscribeMessage(){
    unsubscribe(this.subscribe);
}

}