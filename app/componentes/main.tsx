export function Main() {
  return (
    <>
      <div className="bg-gray-800 pb-5">
        <div className="max-w-5xl mx-auto p-2">
          {/* Sobre Mim */}
          <div className="border-b-2 border-blue-600 hover:border-orange-400 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-6xl text-gray-700 opacity-50 font-bold md:text-8xl">
                SOBRE MIM
              </h1>
              <h2 className="absolute text-4xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md md:text-5xl">
                Sobre mim
              </h2>
            </div>
            {/* Informações Felipe Mendes */}
            <div className="flex flex-col justify-center items-center p-4 gap-20 md:flex-row">
              <div className="flex flex-col justify-center text-justify">
                <h1 className="text-2xl text-white font-bold">
                  Eu sou
                  <a
                    href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                    className="text-blue-600 hover:text-orange-400 mx-2"
                  >
                    Felipe Mendes
                  </a>
                  , um desenvolvedor web e mobile
                </h1>
                <p className="text-gray-400 text-xl">
                  Já estou na área há quase 6 anos profissionalmente, mas
                  comecei a codar desde os meus 11 anos de idade. Desenvolvi
                  vários projetos para empresas com nomes grandes no mercado,
                  com diferentes regras de negócios.
                </p>
              </div>
              <div className="text-white border-l-2 border-blue-600 hover:border-orange-400 rounded-md">
                <ul className="flex flex-col justify-center gap-2 pl-4">
                  <li className="border-b-2 border-gray-700 border-opacity-50 pb-2">
                    Nome:
                    <a
                      href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                      className="text-blue-600 hover:text-orange-400 mx-2"
                    >
                      Felipe Mendes
                    </a>
                  </li>
                  <li className="border-b-2 border-gray-700 border-opacity-50 flex pb-2">
                    Email:
                    <a
                      href="###"
                      className="text-blue-600 hover:text-orange-400 mx-2"
                    >
                      felipemendesofficial@gmail.com
                    </a>
                  </li>
                  <li className="border-b-2 border-gray-700 border-opacity-50 pb-2">
                    Idade: 20 anos
                  </li>
                  <li className="border-b-2 border-gray-700 border-opacity-50 pb-2">
                    De: Feira de Santana - BA
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="border-b-2 border-blue-600 hover:border-orange-400 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-5xl text-gray-700 opacity-50 font-bold md:text-8xl">
                REDES SOCIAIS
              </h1>
              <h2 className="absolute text-4xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md md:text-5xl">
                Redes sociais
              </h2>
            </div>
            <div className="flex items-center justify-center gap-10 p-4">
              <a
                href="https://github.com/felipemendesofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"
                  alt="imagem github"
                  className="h-10"
                />
              </a>
              <a
                href="http://wa.me/5575999092668"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                  alt="imagem whatsapp"
                  className="h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                  alt="imagem instagram"
                  className="h-10"
                />
              </a>
              <a href="##" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                  alt="imagem linkedin"
                  className="h-10"
                />
              </a>

              <a href="##" target="blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000"
                  alt="imagem tiktok"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Projetos */}
          <div className="border-b-2 border-blue-600 hover:border-orange-400 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-6xl text-gray-700 opacity-50 font-bold md:text-8xl">
                PROJETOS
              </h1>
              <h2 className="absolute text-4xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md md:text-5xl">
                Projetos
              </h2>
            </div>
            {/* Porjetos */}
            <div className="flex flex-col md:flex-row gap-10 p-2">
              <div className="relative border-b-4 border-blue-600">
                <img
                  src="imagens/print-tela-inicial.png"
                  alt="Imagem do preojeto WebSite Felipe Mendes"
                />
                <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-white text-xl font-bold bg-black bg-opacity-80">
                  <h1>WebSite Felipe Mendes</h1>
                  <div className="flex gap-10">
                    <a
                      href="https://github.com/felipemendesofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=16318&format=png&color=ffffff"
                        alt="imagem github"
                        className="h-10"
                      />
                    </a>
                    <a href="##">
                      <img
                        src="https://img.icons8.com/?size=100&id=10242&format=png&color=ffffff"
                        alt="Imagem de link"
                        className="h-8"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative border-b-4 border-blue-600">
                <img
                  src="imagens/print-tela-inicial-techcloud.png"
                  alt="Imagem do preojeto WebSite TechCloud"
                />
                <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-white text-xl font-bold bg-black bg-opacity-80">
                  <h1>WebSite TechCloud</h1>
                  <div className="flex gap-10">
                    <a
                      href="https://github.com/felipemendesofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://img.icons8.com/?size=100&id=16318&format=png&color=ffffff"
                        alt="imagem github"
                        className="h-10"
                      />
                    </a>
                    <a href="https://www.techcloud.com.br/">
                      <img
                        src="https://img.icons8.com/?size=100&id=10242&format=png&color=ffffff"
                        alt="Imagem de link"
                        className="h-8"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conhecimentos */}
          <div className="border-b-2 border-blue-600 hover:border-orange-400 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-5xl text-gray-700 opacity-50 font-bold md:text-8xl">
                CONHECIMENTOS
              </h1>
              <h2 className="absolute text-4xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md md:text-5xl">
                Conhecimentos
              </h2>
            </div>
          </div>

          {/* Negocios */}
          <div className="border-b-2 border-blue-600 hover:border-orange-400 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-6xl text-gray-700 opacity-50 font-bold md:text-8xl">
                NEGÓCIOS
              </h1>
              <h2 className="absolute text-4xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md md:text-5xl">
                Negócios
              </h2>
            </div>
          </div>

          {/* Contato */}
          <div className="border-b-2 border-blue-600 hover:border-orange-400 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-6xl text-gray-700 opacity-50 font-bold md:text-8xl">
                CONTATO
              </h1>
              <h2 className="absolute text-4xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md md:text-5xl">
                Fale Comigo
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
