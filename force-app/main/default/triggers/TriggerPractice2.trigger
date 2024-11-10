//Write a trigger that prevents the deletion of an Account if it has any related Contacts.

trigger TriggerPractice2 on Account (before delete) {
    Set<Id> accIds=new Set<Id>();
   Map<Id,List<Contact>> associatedContact= new Map<Id,List<Contact>>();
   for(Account acc:Trigger.old){
   accIds.add(acc.Id);
   }
   List<AggregateResult> counContact= [SELECT AccountId,COUNT(Id) cont from Contact where AccountId In :accIds group by AccountId];
   for(AggregateResult agg:counContact){
    Id accountId=(Id)agg.get('AccountId');
    Integer count=(Integer)agg.get('cont');
    if(count>0){
        Trigger.oldMap.get(accountId).addError('Since this account has associated contacts this cannot be deleted');
    }
   }
}

