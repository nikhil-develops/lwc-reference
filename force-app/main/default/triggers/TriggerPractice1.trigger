
/* Update email of all the contacts associated with the account , email field is updated on the account */
trigger TriggerPractice1 on Account (after update){
    Map <Id,String> updateAcc=new Map<Id,string>();
    for(Account acc:Trigger.new){
        Account oldAccount = Trigger.oldMap.get(acc.Id);
        if(acc.Email!=oldAccount.Email){
            updateAcc.put(acc.Id,acc.Email);
        }

    }
    if(!updateAcc.isEmpty()){
        List<Contact> contactToUpdate=[SELECT Id, AccountId, Email from Contact where AccountId IN :updateAcc.keySet()];
        for(Contact con:contactToUpdate){
            con.Email=updateAcc.get(con.AccountId); 
        }
        update contactToUpdate;
    }
}