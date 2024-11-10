import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    answers={};
    correctAnswerCount=0;
    isSubmitted=false;

         get allNotSelected() {
        return !(Object.keys(this.answers).length===this.questions.length);
    }
    get fullMarks(){
        return `slds-text-heading_large ${this.correctAnswerCount===this.questions.length?'slds-text-color_success':'slds-text-color_destructive'}`
    }

    questions=[
        {id:'ques1',ques:'what is the capitol of Uttar Pradesh?',options:{a:'Lucknow',b:'Kanpur',c:'Varanasi'},correct:'a'},
        {id:'ques2',ques:'what is the capitol of Bihar?',options:{a:'Chapra',b:'Aara',c:'Patna'},correct:'c'},
        {id:'ques3',ques:'what is the capitol of Rajasthan?',options:{a:'Jodhpur',b:'Jaipur',c:'Udaipur'},correct:'b'},
        {id:'ques4',ques:'what is the capitol of Madhya pradesh?',options:{a:'Bhopal',b:'Indore',c:'Jabalpur'},correct:'a'},
    ];
    changeHandler(event){
        event.preventDefault;
        //console.log(event.target.value);
        const {name,value}=event.target;
        this.answers={...this.answers,[name]:value};
        //console.log(this.answers);
    }
    submitHandler(event){
        event.preventDefault();
        let correct=this.questions.filter(question=>this.answers[question.id]===question.correct)
        this.correctAnswerCount=correct.length;
        this.isSubmitted=true;

    }
    resetHandler(){
        this.answers={};
        this.correctAnswerCount=0;
         this.isSubmitted=false;
    }
    
}