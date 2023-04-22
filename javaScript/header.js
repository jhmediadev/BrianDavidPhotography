'use strict';

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Brian David Photography</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="/css/styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&family=Montserrat:wght@200;300;600&display=swap"
        rel="stylesheet">
</head>

<body>

    <nav class="nav collapsible">
        <a><img class="logo" href="/" src="/images/BD_logo_main.png"></a>
        <span class="menu--span">
            <img class="menu--item" src="/images/menu_icon.png" alt="">
        </span>

        <div class="collapsible__content collapsible--expanded">
            <ul class="list nav__list ">
                <li class="nav__item"><a href="#">HOME</a></li>
                <li class="nav__item"><a href="#">PRICING</a></li>
                <li class="nav__item"><a href="#">SERVICES</a></li>
                <li class="nav__item"><a href="#">PORTFOLIO</a></li>
                <li class="nav__item"><a href="#">CONTACT</a></li>
                <li class="nav__item"><a href="#">ABOUT</a></li>
            </ul>
        </div>
    </nav>
</body>
</html>
    `;        
    }
}


class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        `;
    }
}