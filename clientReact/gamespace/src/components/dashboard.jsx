import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgClose from '../assets/imgs/close.svg';
import imgLogo from '../assets/imgs/logo.svg';
import imgMobileLogo from '../assets/imgs/logo-mobile-2.svg';
import imgUser from '../assets/imgs/User.svg';

function App() {
  const [addGameModalVisible, setAddGameModalVisible] = useState(false);
  const [existingGameModalVisible, setExistingGameModalVisible] = useState(false);

  // Restante do seu código

  const handleCreateGame = (e) => {
    e.preventDefault();
    const imageGame = document.getElementById("image-game-file");

    // Coleta os valores dos campos do formulário
    const gameData = {
      name: document.getElementById("gameName").value,
      plataform: document.getElementById("plataform").value,
      genre: document.getElementById("genre").value,
      releaseYear: document.getElementById("release").value,
      language: document.getElementById("language").value,
      resource: document.getElementById("resource").value,
      gameStatus: document.getElementById("status").value,
    };

    uploadImage(imageGame.files[0]);
    createGameFetch(gameData);
  };

  return (
    <div className="container">
      {/* Modal para adicionar novo jogo */}
      {addGameModalVisible && (
        <div className="add-game-modal">
          <div className="exit">
            <img src={imgClose} alt="" className="exit-logo" />
          </div>
          <form
            action=""
            className="add-game-form"
            method="post"
            encType="multipart/form-data"
            onSubmit={handleCreateGame}
          >
            {/* Campos do formulário */}
            {/* Restante do código do formulário */}
            <input type="button" name="" id="createGame" value="Criar" />
          </form>
        </div>
      )}

      {/* Modal para adicionar jogo existente */}
      {existingGameModalVisible && (
        <div className="existingGameModal">
          <div className="exitBtnExistingModal">
            <img src={imgClose} alt="" className="exit-logo" />
          </div>
          <form className="add-existingGame-form">
            {/* Restante do código do formulário de jogo existente */}
            <input
              type="button"
              name="adicionar"
              id="addGame"
              value="ADICIONAR JOGO"
            />
          </form>
        </div>
      )}

      <header className="dashboard-header">
        {/* Restante do código do cabeçalho */}
      </header>

      <div className="dashboard-content">
        <div className="first-content">
          <div className="options">
            <button onClick={() => setAddGameModalVisible(true)}>
              ADICIONE SEU JOGO
            </button>
            <Link to="/search-page">
              <button id="detailedSearch">MINHA LISTA DE JOGOS</button>
            </Link>
            <button onClick={() => setExistingGameModalVisible(true)}>
              ADICIONE JOGO EXISTENTE
            </button>
          </div>
          <div className="game-cover-medium">
            {/* Restante do código */}
          </div>
          <span className="selector-dots"></span>
        </div>

        {/* Restante do conteúdo principal */}
      </div>

      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;



/* import { Link } from "react-router-dom/cjs/react-router-dom.min";

import imgClose from '../assets/imgs/close.svg';
import imgLogo from '../assets/imgs/logo.svg';
import imgMobileLogo from '../assets/imgs/logo-mobile-2.svg';
import imgUser from '../assets/imgs/User.svg';


function App() {
  return (
    <div className="container">
      <div className="add-game-modal">
        <div className="exit">
          <img src={imgClose} alt="" className="exit-logo" />
        </div>
        <form
          action=""
          className="add-game-form"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="image" id="image-game-file" />
          <input
            type="text"
            name="name"
            id="gameName"
            placeholder="Nome do jogo"
          />
          <select
            name="Plataforma"
            id="plataform"
            className="selector-game-options"
          >
            <option value="Default">Selecione uma Plataforma</option>
            <option value="Xbox">Xbox</option>
            <option value="Playstation">Playstation</option>
            <option value="Windows">Windows</option>
            <option value="MacOS">MacOS</option>
            <option value="Linux">Linux</option>
          </select>
          <select name="Genero" id="genre" className="selector-game-options">
            <option value="Default">Selecione um gênero</option>
            <option value="Ação">Ação</option>
            <option value="FPS">FPS</option>
            <option value="RPG">RPG</option>
            <option value="Simulação">Simulação</option>
            <option value="Esportes">Esportes</option>
          </select>
          <input
            type="number"
            name="release-yaer"
            id="release"
            placeholder="Selecione o ano de lançamento"
          />
          <select name="idioma" id="language" className="selector-game-options">
            <option value="Default">Selecione o idioma</option>
            <option value="Português">Português do Brasil</option>
            <option value="Inglês">Inglês</option>
            <option value="Francês">Francês</option>
            <option value="Alemão">Alemão</option>
            <option value="Italiano">Italiano</option>
          </select>
          <select
            name="Recurso"
            id="resource"
            className="selector-game-options"
          >
            <option value="Default">Selecione o estilo do jogo</option>
            <option value="Online">Online</option>
            <option value="Single-player">Single-Player</option>
            <option value="Coop">Coop</option>
            <option value="multiplayer">Multiplayer</option>
          </select>
          <select name="Status" id="status" className="selector-game-options">
            <option value="Default">Selecione o status do jogo</option>
            <option value="Iniciado">Iniciado</option>
            <option value="Playstation">10%</option>
            <option value="Windows">20%</option>
            <option value="30%">30%</option>
            <option value="40%">40%</option>
            <option value="50%">50%</option>
            <option value="60%">60%</option>
            <option value="70%">70%</option>
            <option value="80%">80%</option>
            <option value="90%">90%</option>
            <option value="Zerado">Zerado</option>
          </select>
          <input type="button" name="" id="createGame" value="Criar" />
        </form>
      </div>
      <div className="existingGameModal">
        <div className="exitBtnExistingModal">
          <img src="./assets/imgs/close.svg" alt="" className="exit-logo" />
        </div>
        <form className="add-existingGame-form">
          <h2>Escolha um jogo na lista:</h2>
          <select name="game-list" id="game-list">
            <option value="Spider-Man">Spider-Man</option>
            <option value="Call of Duty">Call of Duty</option>
            <option value="Bob Esponja">Bob Esponja</option>
          </select>
          <input
            type="button"
            name="adicionar"
            id="addGame"
            value="ADICIONAR JOGO"
          />
        </form>
      </div>
      <header className="dashboard-header">
        <div className="logo">
          <img src={imgLogo} alt="" className="desktop-logo" />
          <img
            src={imgMobileLogo}
            alt=""
            className="logo-mobile"
          />
        </div>
        <div className="profile-mobile-way">
          <img src={imgUser} alt="" />
        </div>
      </header>
      <div className="dashboard-content">
        <div className="first-content">
          <div className="options">
            <button id="add-game">ADICIONE SEU JOGO</button>
            <Link to="/search-page">
               <button id="detailedSearch">MINHA LISTA DE JOGOS</button>
            </Link>

           
            <button id="existingGames">ADICIONE JOGO EXISTENTE</button>
          </div>
          <div className="game-cover-medium">
            {/*<img src="" alt="Game Cover Medium" />*}
          </div>
          <span className="selector-dots"></span>
        </div>
        <div className="carousel-bar">
          <p>XBOX</p>
          <div className="games-bar">
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
          </div>
        </div>
        <div className="carousel-bar">
          <p>PLAYSTATION</p>
          <div className="games-bar">
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
          </div>
        </div>
        <div className="poster-apresentation">
          <p>JOGOS COM A MAIOR NOTA</p>
          <div className="apresentation-wrapper">
            <div className="game-large-cover"></div>
            <div className="game-infos">
              <p className="game-name">lorem</p>
              <p className="game-gendre">lorem</p>
              <p className="release-yaer">2012</p>
              <p className="resource">lorem</p>
              <p className="language">lorem</p>
              <div className="stars">******</div>
            </div>
          </div>
        </div>
        <div className="carousel-bar">
          <p>PC</p>
          <div className="games-bar">
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
            <div className="game"></div>
          </div>
        </div>
        <div className="recently-added">
          <p>Adicionados recentemente</p>
          <div className="recently-added-wrapper">
            <div className="game-extra-large-cover"></div>
            <div className="game-extra-large-cover"></div>
          </div>
        </div>
      </div>
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
*/