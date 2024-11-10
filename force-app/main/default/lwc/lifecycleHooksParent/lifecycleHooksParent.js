import { LightningElement } from 'lwc';

export default class LifecycleHooksParent extends LightningElement {
    constructor(){
        super()
        console.log('parent constructor is called');
    }
    connectedCallback(){
     console.log('parent connectedCallback is called');
    }
    renderedCallback(){
     console.log('parent renderedCallback is called');
    }
    disconnectedCallback(){
    console.log('parent renderedCallback is called');
 
    }
    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)

    }
}