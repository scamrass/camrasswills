

/*jshint esversion: 6 */

class PageFooter extends HTMLElement {
    constructor() {
      super();
      this.rating = 0;
    }
    connectedCallback() {
      this.innerHTML = `
        <div id="footer" class="container">
				<div class="row footer_inside">
					<div class="four columns">
						<h3>About Peter</h3>
						<p>I have over 30 years experience in the ﬁnancial services industry. Twenty of those
							were working for large UK insurers; National Mutual, Scottish Equitable and Clerical
							Medical.<a href="about.html"> read more...</a>
						</p>
					</div>
					<div class="four columns">
						<h3 class="margined_left">Navigation</h3>
						<ul class="margined_left">
							<li><a href="index.html">Home</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="about.html">About Us</a></li>
							<li><a href="contact.html">Contact Us</a></li>
						</ul>
					</div>
					<div class="four columns">	   
						<h3 class="margined_left">T &amp; C's</h3>
						<ul class="margined_left">
							<li><a id="downloadTsAndCs" >Terms &amp; Conditions</a></li>
							<li><a href="privacy.html">Privacy Policy</a></li>
						</ul>
					</div>

					<div class="four columns">
						<h3>Get in Touch</h3>
						<div class="icon_phone" title="Phone" >t: <a href="tel:01622 720985">01622 720985</a>
							<p>m: <a href="tel:07747 007971">07747 007971</a></p>
						</div>
						<div class='icon_mail' title='Email'>peter@camrasswills.co.uk</div>	
						<div class='icon_loc' title='Location'>2 The Old Bakery, Lees Road, Yalding, Maidstone, Kent ME18 6HB</div>	

						<div class='clear'></div>
						<div class='h10'></div>

					</div> 
				</div> 
				<div class="clear"></div>
				<div class="footer_btm">
					<div class="footer_btm_inner">
						<div id="powered"><a href="http://www.camrasswills.co.uk" target="_blank">Camrass Wills</a> © 2021 &nbsp; | &nbsp; <a href="http://www.brookmead.co.uk" target="_blank">Brookmead</a></div>
					</div>	  
				</div>
			</div>
      `;
    }
   }
   
   customElements.define('page-footer', PageFooter);