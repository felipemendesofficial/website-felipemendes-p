export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-5xl mx-auto p-10 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-sm">
            Copyright &copy; 2024
            <a
              href="https://www.instagram.com/felipemendes_oficial?igsh=bndldGRndjVkM2lv&utm_source=qr"
              className="text-blue-600 hover:text-orange-400 mx-2"
            >
              Felipe Mendes.
            </a>
          </p>
          <p className="text-gray-400 text-sm">Todos os direitos reservados.</p>
        </div>
        {/* Redes sociais */}
        <div className="hidden md:flex items-center justify-center gap-4">
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
            href="http://wa.me/5575999092668"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/?size=100&id=16466&format=png&color=ffffff"
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
    </footer>
  );
}
