import { LightningElement } from 'lwc';

import IMAGES from '@salesforce/resourceUrl/Images'

export default class SkillCards extends LightningElement {

    adminURL = IMAGES + '/admin.png';
    servicesURL = IMAGES + '/services.png';
    trainingURL = IMAGES + '/training.png';

}