import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    isVisible=false;
    isHello='this is text only!!';

    handleClick(){
        this.isVisible=true;
    }
    updateText(event){
        if(event.target.value==='hello'){
            this.isHello='Hurray! you entered the correct text!';
        }else{
            this.isHello='Oh! you entered the incorrect text!';
        }
    }
}