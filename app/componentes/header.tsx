export function Header() {
  return (
    <>
      {/* Header */}
      <div className="relative">
        {/* Imagem de fundo */}
        <img
          src="imagens/img-de-fundo.png"
          alt="imagem de fundo"
          className="w-full h-screen object-cover"
        />

        {/* Conteudo do Header */}
        <div className="absolute inset-0 max-w-5xl mx-auto p-2">
          {/* Navbar */}
          <nav className="flex items-center justify-between p-2 md:bg-black md:bg-opacity-20 rounded-xl">
            {/* Logo e menu */}
            <div className="flex items-center justify-center gap-4">
              <img
                src="imagens/logo.gif"
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
          <div className="flex flex-col items-center justify-center min-h-[85vh] gap-16 md:flex-row">
            {/* Texto de apresentação */}
            <div className="flex flex-col gap-2 bg-black bg-opacity-60 rounded-xl p-4 hover:border-blue-600 border-2 border-transparent">
              <h1 className="text-4xl font-bold text-white flex flex-col md:text-5xl">
                Olá, eu sou
                <a
                  href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                  className="text-blue-600 underline hover:text-orange-400 ml-6"
                >
                  Felipe Mendes!!
                </a>
              </h1>
              <div className="opacity-50">
                <p className="text-white hover:text-orange-400">
                  <span className="text-blue-600">•</span> Front-End Developer
                </p>
                <p className="text-white hover:text-orange-400">
                  <span className="text-blue-600">•</span> Empreendedor
                </p>
              </div>
            </div>
            {/* Imagem de apresentação Felipe Mendes */}
            <div>
              <a href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr">
                <img
                  src="imagens/felipemendes.png"
                  alt="Foto de Felipe Mendes"
                  className="h-60 bg-black bg-opacity-60 hover:border-blue-600 border-2 border-transparent rounded-lg md:h-72"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
