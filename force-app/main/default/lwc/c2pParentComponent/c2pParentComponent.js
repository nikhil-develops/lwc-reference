import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal=false
    parentTitle="Child to parent communication"
    handleClick(){
        this.showModal=true
    }
    closeHanderNew(event){
        this.showModal=false
        this.parentTitle=event.detail
    }
    alertMessage(){
        console.log('this is true')
    }
}