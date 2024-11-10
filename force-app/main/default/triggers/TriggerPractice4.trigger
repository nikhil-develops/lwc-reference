/* Write a trigger on contact when the contact record is inserted check if the contact is 
associated with any account, calculate the sum of all the opportunities of that account, 
if there is no opportunity linked with that account create new one */

trigger TriggerPractice4 on Contact (after insert) {
    Set<Id> accIds=new Set<Id>();
    for(Contact con:Trigger.new){
        if(con.AccountId!=null){
            accIds.add(con.AccountId);
        }
    }
    List<AggregateResult> opp=[SELECT AccountId,SUM(Amount) amt from Opportunity where AccountId=:accIds group by AccountId];
    List<Opportunity> newOpportunity= new List<Opportunity>();
    List<Account> allAccounts=[SELECT Id,Opportunity_total__c from Account where Id in :accIds];
    Map<Id,Decimal> amtMap= new  Map<Id,Decimal>();
    for(AggregateResult oppAmt:opp){
        amtMap.put((Id)oppAmt.get('AccountId'),(Decimal)oppAmt.get('amt'));
    }
    for(Account accountRecord:allAccounts){
        if(amtMap.containsKey(accountRecord.Id)){
            accountRecord.Opportunity_total__c=amtMap.get(accountRecord.Id);
        }else{
            newOpportunity.add(new Opportunity(Name='Opportunity_nik'+accountRecord.Id,AccountId=accountRecord.Id));
        }
    }
    if(!newOpportunity.isEmpty()){
    Insert newOpportunity;
    }
    if(!allAccounts.isEmpty()){
    Update allAccounts;
    }
    
}