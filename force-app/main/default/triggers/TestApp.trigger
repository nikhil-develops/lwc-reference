trigger TestApp on Test__c (before insert, before update) {
    try{
    if(Trigger.isInsert){
    List<Test__c> allTest= Trigger.new;
    }
    if(Trigger.isUpdate){
            List<Test__c> allTest= Trigger.new;
            Id ab=allTest[0].Id;
            //Trigger.newMap.get(ab).Name.addError('This is Map test on name '+ab);
            Test__c recF=[SELECT Id,Name from Test__c where Id='a07GA000013p3OkYAI'];
            recF.description__c.addError('Hahaha');

    }}catch(Exception e){
        System.debug(e.getCause());
    }
   
}