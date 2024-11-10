import { LightningElement } from 'lwc';

export default class P2cParent extends LightningElement {
    parentTitle="Parent to child communication using action";
    percent=0
    percentHander(event){
        this.percent=event.target.value
    }
    titlehandler(){
       
       this.template.querySelector('c-progress-bar-component').changeTitle();
    }
}