export function Teste() {
  return (
    <>
      {/* Apresentação inicial */}
      <div className="flex flex-col items-center justify-between my-40 p-2 gap-2 md:flex-row">
        {/* Texto apresentação Felipe Mendes */}
        <div className="bg-black bg-opacity-60 rounded-xl p-4 border-blue-900 border-4">
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
          <a href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr">
            <img
              src="imagens/felipemendes.png"
              alt="imagem de Felipe Mendes"
              className="h-96 bg-black bg-opacity-60 border-blue-900 border-4 rounded-lg"
            />
          </a>
        </div>
      </div>
    </>
  );
}
