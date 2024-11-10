import { LightningElement ,api} from 'lwc';

export default class ProgressBarComponent extends LightningElement {
@api percent

@api changeTitle(){
   this.percent= 50
}
}