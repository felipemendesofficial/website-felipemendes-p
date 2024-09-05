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
              <div className="flex flex-col justify-center text-justify gap-4">
                <h1 className="text-2xl text-white font-bold">
                  Eu sou
                  <a
                    href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                    className="text-blue-600 hover:text-orange-400 mx-2"
                  >
                    Felipe Mendes
                  </a>
                  , graduando em Engenharia de Software.
                </h1>
                <p className="text-gray-400 text-xl">
                  Atualmente, estou dedicando-me ao aprimoramento das minhas
                  habilidades como desenvolvedor web, buscando expandir
                  constantemente meu conhecimento para evoluir como
                  profissional. Meu foco é não apenas dominar as ferramentas e
                  tecnologias mais atuais, mas também aplicar esse conhecimento
                  de forma eficaz, com o objetivo de agregar valor à minha
                  carreira e entregar soluções inovadoras e de alta qualidade.
                </p>
                <p className="text-gray-400 text-xl">
                  Além de minha dedicação ao desenvolvimento web, sou também
                  empreendedor no ramo de aluguel de som. A vivência do
                  empreendedorismo enriquece minha carreira como desenvolvedor,
                  trazendo uma visão mais completa sobre gestão, inovação e a
                  importância de um atendimento ao cliente diferenciado.
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
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
              <div className="flex flex-col items-center justify-center h-48 w-48 bg-gray-700 bg-opacity-50 rounded-ss-2xl border-b-4 border-blue-600 p-4">
                <h1 className="text-xl text-blue-600 font-bold">HTML5</h1>
                <img
                  src="https://img.icons8.com/?size=100&id=CMVEhOBzk3Zp&format=png&color=000000"
                  alt="imagem logo HTML5"
                />
              </div>
              <div className="flex flex-col items-center justify-center h-48 w-48 bg-gray-700 bg-opacity-50 rounded-ss-2xl border-b-4 border-blue-600 p-4">
                <h1 className="text-xl text-blue-600 font-bold">CSS3</h1>

                <img
                  src="https://img.icons8.com/?size=100&id=5cVdiiKKi0vX&format=png&color=000000"
                  alt="imagem logo CSS3"
                />
              </div>
              <div className="flex flex-col items-center justify-center h-48 w-48 bg-gray-700 bg-opacity-50 rounded-ss-2xl border-b-4 border-blue-600 p-4">
                <h1 className="text-xl text-blue-600 font-bold">
                  Tailwind CSS
                </h1>
                <img
                  src="https://img.icons8.com/?size=100&id=FnnFuAIw4e8j&format=png&color=000000"
                  alt="imagem logo Tailwind CSS"
                />
              </div>
              <div className="flex flex-col items-center justify-center h-48 w-48 bg-gray-700 bg-opacity-50 rounded-ss-2xl border-b-4 border-blue-600 p-4">
                <h1 className="text-xl text-blue-600 font-bold">JavaScript</h1>
                <img
                  src="https://img.icons8.com/?size=100&id=V6HShIzw21x7&format=png&color=000000"
                  alt="imagem logo JavaScript"
                />
              </div>
              <div className="flex flex-col items-center justify-center h-48 w-48 bg-gray-700 bg-opacity-50 rounded-ss-2xl border-b-4 border-blue-600 p-4">
                <h1 className="text-xl text-blue-600 font-bold">Figma</h1>
                <img
                  src="https://img.icons8.com/?size=100&id=8EbY3Bnfw0aL&format=png&color=000000"
                  alt="imagem logo Figma"
                />
              </div>
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
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
              <a href="https://www.instagram.com/sitio.colibri_ba?igsh=MWwyaDI4ZGU3ZTZ3bQ%3D%3D&utm_source=qr">
                <div className="bg-slate-200 rounded-lg">
                  <div className="flex p-2 items-center gap-2">
                    <img
                      src="imagens/logo-sitio-colibri.JPEG"
                      alt=""
                      className="h-6 w-6 rounded-full"
                    />
                    <p className="text-sm">sitio.colibri_ba</p>
                  </div>
                  <img
                    src="imagens/logo-sitio-colibri.JPEG"
                    alt=""
                    className=" w-72 h-72 object-cover"
                  />
                  <p className="p-2 text-sm">sitio.colibri_ba</p>
                </div>
              </a>
              <a href="https://www.instagram.com/grupo_destemido?igsh=MW5nMm1zNnc2cDR5eQ%3D%3D&utm_source=qr">
                <div className="bg-slate-200 rounded-lg">
                  <div className="flex p-2 items-center gap-2">
                    <img
                      src="imagens/logo-gp-destemido.PNG"
                      alt=""
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <p className="text-sm">grupo_destemido</p>
                  </div>
                  <img
                    src="imagens/logo-gp-destemido.PNG"
                    alt=""
                    className=" w-72 h-72 object-cover"
                  />
                  <p className="p-2 text-sm">grupo_destemido</p>
                </div>
              </a>
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-20">
              <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="text-white text-2xl">ENTRE EM CONTATO COMIGO</h1>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <a
                    href="http://wa.me/5575999092668"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 hover:bg-orange-400 text-white font-bold bg-blue-600 rounded-full p-4"
                  >
                    Enviar via WhatsApp
                    <img
                      src="https://img.icons8.com/?size=100&id=16466&format=png&color=ffffff"
                      alt="imagem whatsapp"
                      className="h-10"
                    />
                  </a>
                  <a
                    href="http://wa.me/5575999092668"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 hover:bg-orange-400 text-white font-bold bg-blue-600 rounded-full p-4"
                  >
                    Enviar via Email
                    <img
                      src="https://img.icons8.com/?size=100&id=38159&format=png&color=ffffff"
                      alt="imagem e-mail"
                      className="h-10"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-white text-2xl">ME SIGA</h1>
                <div className="flex gap-4">
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
                  <a
                    href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/?size=100&id=32320&format=png&color=ffffff"
                      alt="imagem instagram"
                      className="h-10"
                    />
                  </a>
                  <a href="##" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/?size=100&id=16166&format=png&color=ffffff"
                      alt="imagem linkedin"
                      className="h-10"
                    />
                  </a>

                  <a href="##" target="blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/?size=100&id=ecSO0J04STbs&format=png&color=ffffff"
                      alt="imagem tiktok"
                      className="h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
