export function Cover() {
  return (
    <div className="relative">
      <img
        className="w-full h-auto"
        src="imagens/img-de-fundo.png"
        alt="Imagem de fundo"
      />
      <div className="absolute inset-0 max-w-5xl mx-auto">
        <nav className="bg-gray-800 flex">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img className="h-11" src="imagens/felipe.png" alt="Logo" />
              <div className="hidden md:flex space-x-4">
                <a href="#sobre-mim" className="text-white hover:text-gray-300">
                  Sobre Mim
                </a>
                <a href="#projetos" className="text-white hover:text-gray-300">
                  Projetos
                </a>
                <a href="#negocios" className="text-white hover:text-gray-300">
                  Negócios
                </a>
                <a href="#contato" className="text-white hover:text-gray-300">
                  Contato
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center gap-4">
              <a href="http://wa.me/5575999092668">
                <img
                  src="https://img.icons8.com/?size=100&id=16466&format=png&color=ffffff"
                  alt="imagem whatsapp"
                  className="h-8"
                />
              </a>
              <a href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr">
                <img
                  src="https://img.icons8.com/?size=100&id=32320&format=png&color=ffffff"
                  alt="imagem instagram"
                  className="h-8"
                />
              </a>
              <a href="https://www.linkedin.com/in/felipe-mendes">
                <img
                  src="https://img.icons8.com/?size=100&id=16166&format=png&color=ffffff"
                  alt="imagem linkedin"
                  className="h-8"
                />
              </a>
              <a href="https://github.com/felipemendesofficial">
                <img
                  src="https://img.icons8.com/?size=100&id=16318&format=png&color=ffffff"
                  alt="imagem github"
                  className="h-8"
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="hidden md:hidden">
            <a
              href="#sobre-mim"
              className="block text-white hover:text-gray-300"
            >
              Sobre Mim
            </a>
            <a
              href="#projetos"
              className="block text-white hover:text-gray-300"
            >
              Projetos
            </a>
            <a
              href="#negocios"
              className="block text-white hover:text-gray-300"
            >
              Negócios
            </a>
            <a href="#contato" className="block text-white hover:text-gray-300">
              Contato
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
