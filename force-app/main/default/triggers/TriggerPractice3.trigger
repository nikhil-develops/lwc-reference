/* Create a trigger that automatically sets the Stage field of an Opportunity to "Closed Won" 
if the Amount exceeds $100,000 when the Opportunity is inserted or updated. */

trigger TriggerPractice3 on Opportunity (before insert, before update) {
    for(Opportunity opp:Trigger.new){
        if(opp.Amount>100000 ){
            opp.StageName='Closed won';
        }
    }
}