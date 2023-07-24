import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/Images'

export default class Hero extends LightningElement {

    imageURL = IMAGES + '/pexels-andrea-piacquadio-774909.jpg'

    dialog;

    renderedCallback(){
        this.dialog = this.template.querySelector('.leadForm');
    }

    showDialog(){
        this.dialog.showModal();

    }

    closeDialog(){
        this.dialog.close();

    }

    submitForm(){
        //stopped!!!!!!!!!
    }
}