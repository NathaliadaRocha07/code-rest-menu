import Head from "next/head";
import Image from "next/image";
import MenuContent from '../components/MenuContent/MenuContent';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <div className="my_bg_d my_container">
        <nav className="navbar fixed-top bg-dark border-body dm_shadow my_bg_d my_container" data-bs-theme="dark">
          <div className="container-fluid">
            <img className="logo" src="../imagem/rest_logo_dm.svg" alt=" "/>
            
            <button className="navbar-toggler noborder" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"aria-label="Toggle navigation">
              <img className="nav button" src="../imagem/nav_button.svg" alt=" "/>
            </button>
          
            <div className="collapse navbar-collapse pt-3 pb-2" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <MenuContent />   
              </ul>
            </div>
          </div>
        </nav>

        <div className="my_topspace"></div>
        <div className="my_h1 my_l p-3 pt-5"> Main Course
          <hr />
        </div>

        <div className="my_h1 my_l p-3 pt-5"> Appetizer
          <hr />
        </div>

        <div className="my_h1 my_l p-3 pt-5"> Drinks
          <hr />
        </div>

        <div style={{ paddingBottom: '30px' }}></div>
      </div>
      </main>
    </>
  );
}
