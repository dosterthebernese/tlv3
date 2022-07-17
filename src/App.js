import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import React, { useState, useEffect } from "react";

function App() {

  const [isViewingDocumentation, setIsViewingDocumentation] = useState(false);
  const [isViewingHome, setIsViewingHome] = useState(true);

  async function onClickedDocumentation(event) {
    setIsViewingHome(false)
    setIsViewingDocumentation(true);

  };

  async function onClickedHome(event) {
    setIsViewingDocumentation(false);
    setIsViewingHome(true)
  };

  return (
    <div className="App">


      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://tradellama.io">
            <img src={logo} width="112" height="28"/>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" onClick={e => onClickedHome(e)}>
              Home
            </a>

            <a class="navbar-item" onClick={e => onClickedDocumentation(e)}>
              Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider"/>
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

  
      <section class="section">
        <div class="container">

          <div class="columns">

            {isViewingDocumentation == true && (
              <div class="column">              
                <p class="mb-3 is-size-5 has-text-weight-light has-text-dark">Haha!  Yes, we skip the silliness and send you to Discord.  Why would you want anything else?</p>
                <iframe src="https://discord.com/widget?id=928022156888125520&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
              </div>              
            )}

            {isViewingHome == true && (
              <>

                <div class="column">              
                  <article class="message is-dark">
                    <div class="message-header">
                      <p>Be a Llama</p>
                    </div>
                    <div class="message-body">
                      <p class="mb-3 is-size-5 has-text-weight-light has-text-dark">
                        What follows are instructions for spinning up a spartan linux box (Ubuntu 20.04, due to some Elixir issues that are not ready for 22.04).                    
                      </p>
                      <p class="mb-3 is-size-5 has-text-weight-light has-text-dark">
                        Within minutes, you can have a POC for your own <b>data as a product</b>, <b>collaborative commerce</b> framework, with licensing on chain and royalty management enabled.                    
                      </p>
                      <p class="mb-3 is-size-5 has-text-weight-light has-text-dark">
                        You will easily be able to swap out our simple data ideas for your own.  If you are evaluating an on chain data campaign, this is the fastest way to get to a POC.
                      </p>
                    </div>
                  </article>
                </div>


                <div class="column">          
                  <article class="message is-dark">
                    <div class="message-header">
                      <p>3 Open Source Repos</p>
                    </div>
                    <div class="message-body">
                       <p class="mb-3 is-size-5 has-text-weight-light has-text-dark">
                        With a few repos and some command line installs, you can easily create digital assets, publish them to a vault and register them on chain, combine them into a Token, and offer them to your target customers.  
                        </p>
                       <p class="mb-3 is-size-5 has-text-weight-light has-text-dark">
                        These are the same code repos we at TradeLlama use for our clustering data sets.  
                        </p>
                    </div>
                  </article>
                </div>

      
                <div class="column">
                  <article class="message is-dark">
                    <div class="message-header">
                      <p>Install TLDYDX</p>
                    </div>
                    <div class="message-body">
                      <a class="button is-link" href="https://github.com/dosterthebernese/tldydx">Repo at GitHub</a>
                       <p class="mt-3 mb-3 is-size-5 has-text-weight-light has-text-dark">
                        This will give you a few simple Agents (it's elixir, don't worry) that will pull data from DYDX (it's free), and store in a database.  Later, you'll make some assets with this data.
                      </p>
                    </div>
                  </article>
                </div>



                <div class="column">
                  <article class="message is-dark">
                    <div class="message-header">
                      <p>Install PDSR</p>
                    </div>
                    <div class="message-body">
                      <a class="button is-link" href="https://github.com/dosterthebernese/pdsr">Repo at GitHub</a>
                       <p class="mt-3 mb-3 is-size-5 has-text-weight-light has-text-dark">
                      A simple set of tools for taking data out of postgres, making some clusters, and then creating assets - in this case, SVGs, PNGs, and CSVs.
                      </p>
                    </div>
                  </article>
                </div>

                <div class="column">
                  <article class="message is-dark">
                    <div class="message-header">
                      <p>Install PDS</p>
                    </div>
                    <div class="message-body">

                      <a class="button is-link" href="https://github.com/dosterthebernese/pds">Repo at GitHub</a>
                       <p class="mt-3 mb-3 is-size-5 has-text-weight-light has-text-dark">
                        A command line toolset for registering your assets on chain, bundling them into tokens, and offering them to users.
                      </p>

                    </div>
                  </article>
                </div>

              </>
            )}

          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
