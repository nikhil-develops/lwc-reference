trigger TriggerPractice34 on Contact (before insert) {
    
    Set<String> contactEmail= new Set<String>();
    Set<String> contactPhone= new Set<String>();
    Set<String> newcontactConcatPhone= new Set<String>();
    Set<String> existingcontactConcatPhone= new Set<String>();

    String concatString;

    for(Contact con :Trigger.new){
        contactEmail.add(con.Email);
        contactPhone.add(con.Phone);
        concatString=con.Email.toLowercase()+'-'+con.Phone;
        if(!newcontactConcatPhone.contains(concatString)){
        newcontactConcatPhone.add(concatString);
        }else{
            con.addError('Email and phone combination already exists');
        }
    }
    List<Contact> existingContact=[SELECT Id,Email,Phone from Contact where Email in :contactEmail and Phone in :contactPhone];
    for(Contact exCon:existingContact){
        concatString=exCon.Email.toLowercase()+'-'+Con.Phone;
        if(!newcontactConcatPhone.contains(concatString)){
        newcontactConcatPhone.add(concatString);
        }
    }



}
/*
1. Loop the Trigger.new
2. Store concatenated string of Email+phone in sets (always has qnique values)
3. 
 */