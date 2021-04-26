/*jshint esversion: 6 */
import { HyperLink } from './hyper-link.js';

class HeaderContact extends HTMLElement {
    constructor() {
        super();
  
        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        var landline = this.getAttribute('data-landline');
        var mobile = this.getAttribute('data-mobile');
        var email = this.getAttribute('data-email');
        const headerPhone = document.createElement('div');

        const landlineLink = new HyperLink('tel:' + landline, landline);

        const mobileLink = document.createElement('a');
        mobileLink.href = 'tel:' + landline;
        mobileLink.textContent = mobile;

        headerPhone.textContent = 't:' + landlineLink + ' m:' + mobileLink;
        headerPhone.style = `float: right; 
            padding-left: 22px;
            background: url(../images/header_phone.png) left center no-repeat;
            margin-left: 20px;`;

        const headerEmail = document.createElement('div');
        headerEmail.textContent = email + '  ';
        headerEmail.style = `
            float: right;
            padding-left: 23px;
            background: url(../images/header_mail.png) left center no-repeat;`;
  
        shadow.appendChild(headerPhone);
        shadow.appendChild(headerEmail);
        shadow.appendChild(document.createElement('br'));
    }
  }
  
  customElements.define('header-contact', HeaderContact);