class PageState {
    constructor() {
        let currentState = new homeState(this); //this refer to the function above

        this.init = function () {
            this.change(new homeState); //used to change current state        
        };

        this.change = function (state) {
            currentState = state;
        };
    }
}


    //  Home State
    const homeState = function(page) {
        document.querySelector('#heading').textContent = null;
        document.querySelector('#content').innerHTML = `<div class="jumbotron">
        <h1 class="display-4">Home Page</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>`;
    };


    //  About State
    const aboutState = function(page) {
        document.querySelector('#heading').textContent = 'About US';
        document.querySelector('#content').innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corrupti accusamus tempora quos ipsa, quidem in mollitia, animi illum, fuga non eveniet necessitatibus ullam aliquid! Eum tempora maxime placeat! Accusantium!</p>';
    };

     //  Contact State
     const contactState = function(page) {
        document.querySelector('#heading').textContent = 'Contact US';
        document.querySelector('#content').innerHTML = `<div class="jumbotron">
        <h1 class="display-4">Contact Page</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-success btn-lg" href="#" role="button">Contact us</a>
        </p>
      </div>`;
    };

        // Instantiate PageState
        const page = new PageState();

        // Inin tge first page
        page.init();

        // UI vars
        const home = document.getElementById('home'),
              about = document.getElementById('about'),
              contact = document.getElementById('contact');

        // Home
        home.addEventListener('click', (e) => {
            page.change(new homeState);

            e.preventDefault();
        });

        
        // About
        about.addEventListener('click', (e) => {
            page.change(new aboutState);

            e.preventDefault();
        });

        
        // Contact
        contact.addEventListener('click', (e) => {
            page.change(new contactState);

            e.preventDefault();
        });