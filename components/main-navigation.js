/*jshint esversion: 6 */

class MainNavigation extends HTMLElement {
    constructor() {
        super();
        this.rating = 0;
    }
    connectedCallback() {
        this.innerHTML = `
      <div class="sixteen columns">
      <div class="topnav" id="mytopnav">
          <a href="index.html">Home</a>
          <div class="dropdown">
              <button class="dropbtn">Services 
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="wills.html"><span>Wills</span></a>
                  <a href="tenantsincommon.html"><span>Tenants in Common</span></a>
                  <a href="powersofattorney.html"><span>Power of Attorney</span></a>
                  <a href="lpafinancial.html"><span>LPA Financial</span></a>
                  <a href="lpahealth.html"><span>LPA Health &amp; Welfare</span></a>
                  <a href="probate.html"><span>Probate</span></a>
                  <a href="funeral.html"><span>Funeral Planning</span></a>
                  <a href="businessWills.html"><span>Business Wills</span></a>
                  <a href="contact.html" class="last_submenu_item"><span>Contact Us</span></a>
              </div>
          </div> 
          <a href="prices.html">Prices</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact Us</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i></a>
      </div>
  </div>
      `;
    }
}

customElements.define('main-navigation', MainNavigation);