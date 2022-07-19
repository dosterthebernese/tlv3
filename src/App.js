import logo from './logo.svg';
import bubbles from './bubbles.svg';
import './App.css';
import 'bulma/css/bulma.css'
import React, { useState, useEffect } from "react";

function App() {

  const [isViewingDocumentation, setIsViewingDocumentation] = useState(false);
  const [isViewingHome, setIsViewingHome] = useState(true);
  const [isViewingOverview, setIsViewingOverview] = useState(true);
  const [isViewingRepos, setIsViewingRepos] = useState(false);

  async function onClickedDocumentation(event) {
    setIsViewingHome(false)
    setIsViewingOverview(false)
    setIsViewingRepos(false)
    setIsViewingDocumentation(true);

  };

  async function onClickedHome(event) {
    setIsViewingDocumentation(false);
    setIsViewingRepos(false);
    setIsViewingHome(true)
    setIsViewingOverview(true)
  };

  async function onClickedRepos(event) {
    setIsViewingDocumentation(false);
    setIsViewingOverview(false)
    setIsViewingRepos(true);
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


            {isViewingDocumentation == true && (
              <div class="columns">
                <div class="column">              
                  <p class="mb-3 is-size-5 has-text-weight-light has-text-dark">Haha!  Yes, we skip the silliness and send you to Discord.  Why would you want anything else?</p>
                  <iframe src="https://discord.com/widget?id=928022156888125520&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>              
              </div>
              )}

            {isViewingHome == true && (

              <>

                <section class="hero is-info mb-3">
                  <div class="hero-body">
                    <nav class="breadcrumb is-centered is-large has-dot-separator" aria-label="breadcrumbs">
                      <p class="title">                      
                        <ul>
                          {isViewingOverview == true ? (
                            <li class="is-active has-text-warning-dark"><a href="#">Overview</a></li>
                          ) : (
                            <li><a href="#" onClick={e => onClickedHome(e)}>Overview</a></li>
                          )}
                          {isViewingRepos== true ? (
                            <li class="is-active has-text-warning-dark"><a href="#">Install Repos</a></li>
                          ) : (
                            <li><a href="#" onClick={e => onClickedRepos(e)}>Install Repos</a></li>
                          )}

                          <li><a href="#">PDS Portfolio</a></li>
                        </ul>
                      </p>
                    </nav>                                
                    <p class="sub-title">It's really as easy as install, run, play, mint.</p>
                  </div>
                </section>


                <div class="columns">


                



                    {isViewingOverview == true && (

                      <>

                        <div class="column">   

                          <div class="card">
                            <header class="card-header">
                              <p class="card-header-title">
                                DIY in 3 Easy Steps
                              </p>
                              <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                              </button>
                            </header>

                            <div class="card-content">
                              <div class="content">
                                <p class="mb-3">
                                  What follows are instructions for spinning up a spartan linux box (Ubuntu 20.04, due to some Elixir issues that are not ready for 22.04).                    
                                </p>
                                <p class="mb-3">
                                  Within minutes, you can have a POC for your own <b>data as a product</b>, <b>collaborative commerce</b> framework, with licensing on chain and royalty management enabled.                    
                                </p>
                                <p class="mb-3">
                                  You will easily be able to swap out our simple data ideas for your own.  If you are evaluating an on chain data campaign, this is the fastest way to get to a POC.
                                </p>
                              </div>
                            </div>
                          </div>
                        

                        </div>


                        <div class="column">          



                          <div class="card">
                            <header class="card-header">
                              <p class="card-header-title">
                                Open Source
                              </p>
                              <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                              </button>
                            </header>

                            <div class="card-content">
                              <div class="content">
                                 <p class="mb-3">
                                  With a few repos and some command line installs, you can easily create digital assets, publish them to a vault and register them on chain, combine them into a Token, and offer them to your target customers.  
                                  </p>
                                 <p class="mb-3">
                                  These are the same code repos we at TradeLlama use for our clustering data sets.  
                                  </p>
                                 <p class="mb-3">
                                  While we chose Elixir and R for these demo tools, we also have versions in Rust, which we will open source in Q3.  We liked Elixir, mostly because we can use the same repo for Agents (daemons), but easily have an interactive session, for playing.  
                                  </p>
                              </div>
                            </div>
                          </div>


                        </div>

                      </>


                    )}


                    {isViewingRepos == true && (


                      <>




                        <div class="column">



                          <div class="card">
                            <header class="card-header">
                              <p class="card-header-title">
                                Your Data Magic
                              </p>
                              <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                              </button>
                            </header>

                            <div class="card-content">
                              <div class="content">
                                <a class="button is-link" href="https://github.com/dosterthebernese/tldydx">Repo at GitHub</a>
                                 <p class="mt-3 mb-3">
                                  This will give you a few simple Agents (it's elixir, don't worry) that will pull data from DYDX (it's free), and store in a database.  Later, you'll make some assets with this data.
                                </p>
                                 <p class="mt-3 mb-3">
                                  The README has step by step instructions.  At a high level, you will install Postgres, and build a quick DB that loads some DYDX asset pair data.
                                </p>

                                 <p class="mt-3 mb-3">
                                  Note that when first trying this out, just use the _min calculations, as you'll only need to run the data piece for 30 mins, to build up enough data.
                                </p>

                              </div>
                            </div>
                          </div>

                        </div>



                        <div class="column">

                          <div class="card">
                            <header class="card-header">
                              <p class="card-header-title">
                                Build a Data Asset
                              </p>
                              <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                              </button>
                            </header>

                            <div class="card-content">
                              <div class="content">
                                <a class="button is-link" href="https://github.com/dosterthebernese/pdsr">Repo at GitHub</a>
                                 <p class="mt-3 mb-3">
                                A simple set of tools for taking data out of postgres, making some clusters, and then creating assets - in this case, SVGs, PNGs, and CSVs.
                                </p>
                                 <p class="mt-3 mb-3">
                                R is a great framework for quickly pulling data from Postgres, and applying various ML techniques.  Our favorite on the Llama farm is Gaussian K-Means.
                                </p>
                                 <p class="mt-3 mb-3">
                                  Use the example script, against min, when first trying this out.  (Rscript example.r)
                                </p>

                              </div>
                            </div>
                          </div>


                        </div>

                        <div class="column">



                          <div class="card">
                            <header class="card-header">
                              <p class="card-header-title">
                                Minting
                              </p>
                              <button class="card-header-icon" aria-label="more options">
                                <span class="icon">
                                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                              </button>
                            </header>

                            <div class="card-content">
                              <div class="content">
                                <a class="button is-link" href="https://github.com/dosterthebernese/pds">Repo at GitHub</a>
                                 <p class="mt-3 mb-3">
                                  A command line toolset for registering your assets on chain, bundling them into tokens, and offering them to users.  This is wired to our test net, and has a test set of creds.  We'll stub out for you, where to change to make this your own.
                                </p>
                                 <p class="mt-3 mb-3">
                                  This is the only repo you really need, if you have a directory of assets you'd like to play with on your own.  It's meant for iex (interactive) usage, and offers various common wallet function calls.
                                </p>

                              </div>
                            </div>
                          </div>
                        </div>


                      </>
                    )}

          

                </div>
              </>

            )}

        </div>
      </section>


    </div>
  );
}

export default App;
