import { LightningElement } from 'lwc';

export default class SlotChildDemo extends LightningElement {
    handleSlotChange(){
        const footerElement=this.template.querySelector('.slds-card__footer');
        if(footerElement){
            footerElement.classList.remove('slds-hide');
        }
    }
}