import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'
export default class MemoryCardGame extends LightningElement {
    isLibLoaded=false;
    renderedCallback(){
        if(this.isLibLoaded){
            return
        }else{
            loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
            console.log('loaded successfully');
        }).catch(()=>{
            console.log(error);
        });
        this.isLibLoaded=true;
        
        }
        
    }
}