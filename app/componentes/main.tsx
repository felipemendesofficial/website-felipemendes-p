export function Main() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="max-w-5xl mx-auto p-2">
          {/* Sobre Mim */}
          <div className="border-b-2 border-blue-600 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-8xl text-gray-700 opacity-50 font-bold">
                SOBRE MIM
              </h1>
              <h2 className="absolute text-5xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md">
                Sobre mim
              </h2>
            </div>
            {/* Informações Felipe Mendes */}
            <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
              <div className="flex flex-col justify-center text-justify px-8">
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
                  comecei a "codar" desde os meus 11 anos de idade. Desenvolvi
                  vários projetos para empresas com nomes grandes no mercado,
                  com diferentes regras de negócios.
                </p>
              </div>
              <div className="text-white border-l-2 border-blue-600 pl-4 rounded-md">
                <ul className="flex flex-col justify-center gap-2">
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
                    Email:{" "}
                    <a href="###" className="ml-2">
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
          <div className="border-b-2 border-blue-600 rounded-lg pb-40">
            {/* Titulo */}
            <div className="relative flex justify-center items-center py-20">
              <h1 className="text-8xl text-gray-700 opacity-50 font-bold">
                PROJETOS
              </h1>
              <h2 className="absolute text-5xl text-white border-b-2 border-blue-600 hover:border-orange-400 rounded-md">
                Projetos
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
