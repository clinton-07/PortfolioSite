global class ContactMeButtonController {

    @AuraEnabled    
    public static void createLead(String firstName, String lastName, String company, String email, String description) {
        Lead lead = new Lead();
        lead.FirstName = firstName;
        lead.LastName = lastName;
        lead.Company = company;
        lead.Email = email;
        lead.Description = description;
        //test

    insert lead;

    }

}