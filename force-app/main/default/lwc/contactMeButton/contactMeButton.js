import { LightningElement } from 'lwc';

import createLead from '@salesforce/apex/ContactMeButtonController.createLead';

export default class ContactMeButton extends LightningElement {

    dialog;
    firstname;
    lastname;
    company;
    email;
    desc;
    snackBar;

    renderedCallback(){
        this.dialog = this.template.querySelector('.leadForm');
        this.firstname = this.template.querySelector('.firstname');
        this.lastname = this.template.querySelector('.lastname');
        this.company = this.template.querySelector('.company');
        this.email = this.template.querySelector('.email');
        this.desc = this.template.querySelector('.desc');
        this.snackBar = this.template.querySelector('c-snack-bar');
        
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

        }).then(() => {this.snackBar.showSnackBar("Your Request Has been received.")});
        
        this.closeDialog();


        
    }
}