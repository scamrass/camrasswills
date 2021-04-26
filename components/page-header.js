

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
                  <div class="header_phone">t:<a href="tel:01622 720985">01622 720985</a> m:<a href="tel:07747 007971">07747 007971</a></div>
                  <div class="header_mail">peter@camrasswills.co.uk</div>
                  <br/>
                  <div class="header_phone">t:<a href="tel:01273 976967">01273 976967</a> m:<a href="tel:07581 119678">07581 119678</a>								</div>
                  <div class="header_mail">lucy@camrasswills.co.uk&nbsp;&nbsp;</div>
                  <br/><br/>
                  <div><a href = "http://safehandsplans.co.uk/aff/1328/camrass-wills"><h3 class="header_funerals"><u><strong>For details of Funeral Plans click here.</strong></u></h3></a></div>
              </div>			
          </div>
      </div>
  </div>
      `;
    }
   }
   
   customElements.define('page-header', PageHeader);