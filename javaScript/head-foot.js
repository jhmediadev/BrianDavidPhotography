'use strict';




class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        
    <nav class="nav collapsible">
        <a href="../index.html"><img class="logo" href="/"  src="../images/BD_logo_main.png"></a>
        <span class="menu--span">
            <img class="menu--item" src="/images/menu_icon.png" alt="">
        </span>

        <div class="collapsible__content collapsible--expanded">
            <ul class="list nav__list ">
                <li class="nav__item"><a href="../index.html">HOME</a></li>
                <li class="nav__item"><a href="../content/services-features.html">SERVICES</a></li>
                <li class="nav__item"><a href="../content/pricing.html">PRICING</a></li>
                <li class="nav__item"><a href="../content/myportfolio.html">PORTFOLIO</a></li>
                <li class="nav__item"><a href="../content/serviceform.html">CONTACT</a></li>
                <li class="nav__item"><a href="../content/mybio.html">ABOUT</a></li>
            </ul>
        </div>
    </nav>

    `  

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => 
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
);     
}

}




class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
    <footer class="block block--dark footer">
        <div class="container grid">
            <section>
                <header>
                    <li><a href="../content/services-features.html">SERVICES<a></li>
                    <li><a href="../content/myportfolio.html">PORTFOLIO<a></li>
                    <li><a href="../content/serviceform.html">CONTACT<a></li>
                    <li><a href="../content/mybio.html">ABOUT<a></li>
                </header>
                <div>
                    <img id="backtotop"src="../images/BacktoTop.png">
                </div>
                <div class="Connect_WithMe">
                    <p>CONNECT WITH ME</p>
                    <div class="icons">
                        <a href="https://www.facebook.com/" target="_blank"><img src="/images/facebooklogo02bw.png" alt="" width="40"></a>
                        <a href="https://www.instagram.com/" target="_blank"><img src="/images/instagrambw.png" alt="" width="40"></a>
                        <a href="https://twitter.com/home" target="_blank"><img src="/images/twitterbw_02.png" alt="" width="40"></a>
                    </div>
                </div>

                <div class="copyright">
                    <p>&copy Copyright 2023</p>
                </div>

            </section>
        </div>
    </footer>
    
    `

    $("img#backtotop").click( () => {
      $("html").animate({ scrollTop: 0 }, 300);
    });

}

};



customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

