

const insertMainHeader = ( header )=>{
    
     header.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">JavaScript Course</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                <a class="nav-link active" href="/index.html">Principal</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/src/pages/about/about.html">Acerca de nosotros</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/src/pages/contact/contact.html">Contáctanos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/src/pages/register/register.html">Regístrate</a>
                </li>
            </div>
        </div>
        </nav>
     `;

}

