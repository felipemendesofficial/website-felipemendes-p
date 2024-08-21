export function TelaInicial() {
  return (
    <>
      {/* Pagina inicial */}
      <div className="relative">
        {/* Imagem de fundo */}
        <img
          src="imagens/img-de-fundo.png"
          alt="imagem de fundo"
          className="w-full h-screen object-cover"
        />

        {/* Conteudo pagina inicial */}
        <div className="absolute inset-0 max-w-5xl mx-auto">
          {/* Navbar */}
          <nav className="flex items-center justify-between p-2">
            {/* Logo e menu */}
            <div className="flex items-center justify-center gap-4">
              <img
                src="imagens/felipe.png"
                alt="imagem de perfil felipe"
                className="h-16"
              />
              <div className="hidden md:flex space-x-4">
                <a
                  href="#sobre-mim"
                  className="text-white text-lg hover:text-gray-300"
                >
                  Sobre Mim
                </a>
                <a
                  href="#projetos"
                  className="text-white text-lg hover:text-gray-300"
                >
                  Projetos
                </a>
                <a
                  href="#negocios"
                  className="text-white text-lg hover:text-gray-300"
                >
                  Negócios
                </a>
                <a
                  href="#contato"
                  className="text-white text-lg hover:text-gray-300"
                >
                  Contato
                </a>
              </div>
            </div>

            {/* Redes sociais */}
            <div>
              <div className="hidden md:flex items-center justify-center gap-4">
                <a
                  href="http://wa.me/5575999092668"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=16466&format=png&color=ffffff"
                    alt="imagem whatsapp"
                    className="h-10 hover:h-14"
                  />
                </a>
                <a
                  href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=32320&format=png&color=ffffff"
                    alt="imagem instagram"
                    className="h-10 hover:h-14"
                  />
                </a>
                <a href="##" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=16166&format=png&color=ffffff"
                    alt="imagem linkedin"
                    className="h-10 hover:h-14"
                  />
                </a>
                <a
                  href="https://github.com/felipemendesofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=16318&format=png&color=ffffff"
                    alt="imagem github"
                    className="h-10 hover:h-14"
                  />
                </a>
                <a href="##" target="blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=ecSO0J04STbs&format=png&color=ffffff"
                    alt="imagem tiktok"
                    className="h-10 hover:h-14"
                  />
                </a>
              </div>
            </div>

            {/* Menu Mobile */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Apresentação inicial */}
          <div className="flex items-center justify-between my-40 p-2">
            {/* Texto apresentação Felipe Mendes */}
            <div className="bg-black bg-opacity-60 rounded-xl p-4">
              <h1 className="p-4 text-5xl font-bold text-white flex flex-col gap-2">
                Olá, eu sou
                <a
                  href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                  className="text-blue-600 underline hover:text-orange-400 ml-6"
                >
                  Felipe Mendes !!
                </a>
              </h1>
              <div className="p-4 opacity-50">
                <p className="text-white hover:text-orange-400">
                  <span className="text-blue-600">•</span> Front-End Developer
                </p>
                <p className="text-white hover:text-orange-400">
                  <span className="text-blue-600">•</span> Empreendedor
                </p>
              </div>
            </div>

            {/* Imagem Felipe Mendes */}
            <div>
              <img
                src="imagens/felipe.png"
                alt="imagem de Felipe Mendes"
                className="h-96"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Sobre mim</h1>
      </div>
    </>
  );
}
