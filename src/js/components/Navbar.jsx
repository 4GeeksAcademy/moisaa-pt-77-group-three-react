import React from "react";

const Navbar = () => {
    return (
        <div className="text-center">
            <nav class="navbar navbar-expand-lg bg bg-dark" >
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="moveIcon mr-50 ">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-secondary" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled text-secondary" aria-disabled="true">Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled text-secondary" aria-disabled="true">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;