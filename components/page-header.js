

/*jshint esversion: 6 */

class PageHeader extends HTMLElement {
    constructor() {
      super();
      this.rating = 0;
    }
    connectedCallback() {
      this.innerHTML = `
        <style>
          rating-element {
            display: inline-flex;
            align-items: center;
          }
          rating-element button {
            background: transparent;
            border: none;
            cursor: pointer;
          }
        </style>
        <div class="header clearfix row">
      <div class="four columns">
          <div class="logo">
              <br />
              <a href="index.html">
                  <img class="logo" src="../images/logo_2019.jpg" >
              </a>
          </div>
      </div>
      <div class="twelve columns" >
          <div class="header_right" >
              <div class="header_contacts clearfix" >
                  <div class="header_phone">t:<a href="tel:01622 720985">01622 720985</a> t:<a href="tel:01732 926538">01732 926538</a></div>
                  <div class="header_mail"><a href="mailto:peter@camrasswills.co.uk?subject=Website Enquiry">peter@camrasswills.co.uk</a></div>
                  <br/>
                  <div class="header_phone">t:<a href="tel:01273 976967">01273 976967</a></div>
                  <div class="header_mail"><a href="mailto:lucy@camrasswills.co.uk?subject=Website Enquiry">lucy@camrasswills.co.uk</a>&nbsp;&nbsp;</div>
              </div>			
          </div>
      </div>
  </div>
      `;
    }
   }
   
   customElements.define('page-header', PageHeader);