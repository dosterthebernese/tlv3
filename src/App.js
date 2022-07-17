import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
  
      <section class="section">
        <div class="container">
          <img src={logo} class="image is-128x128 is-inline-block" alt="logo" />

          <div class="columns">

            <div class="column">              
              <iframe src="https://discord.com/widget?id=928022156888125520&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>

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
          </div>

          <div class="columns">
  
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

    
          </div>


        </div>
      </section>


    </div>
  );
}

export default App;
