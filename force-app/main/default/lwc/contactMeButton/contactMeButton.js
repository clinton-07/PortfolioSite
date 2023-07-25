import { LightningElement } from 'lwc';

import createLead from '@salesforce/apex/ContactMeButtonController.createLead';

export default class ContactMeButton extends LightningElement {

    dialog;
    firstname;
    lastname;
    company;
    email;
    desc;

    renderedCallback(){
        this.dialog = this.template.querySelector('.leadForm');
        this.firstname = this.template.querySelector('.firstname');
        this.lastname = this.template.querySelector('.lastname');
        this.company = this.template.querySelector('.company');
        this.email = this.template.querySelector('.email');
        this.desc = this.template.querySelector('.desc');
        console.log(this.firstname.value);
    }

    showDialog(){
        this.dialog.showModal();

    }

    closeDialog(){
        this.dialog.close();

    }

    submitForm(event){

        event.preventDefault();

        const firstnameValue = this.firstname.value;
        const lastnameValue = this.lastname.value;
        const companyvalue = this.company.value;
        const emailValue = this.email.value;
        const descValue = this.desc.value;
        console.log(firstnameValue, lastnameValue,companyvalue,emailValue,descValue);

        createLead({
            firstName: firstnameValue,
            lastName:lastnameValue,
            company:companyvalue,
            email:emailValue,
            description:descValue

        });
        this.closeDialog();


        
    }
}