import { whatsappLink } from '../App'

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <p className="font-bold text-white">Dra. Franciele Gross</p>
                <p className="text-xs text-indigo-300">Advocacia TEA</p>
              </div>
            </div>
            <p className="text-indigo-300 text-sm leading-relaxed">
              Especialista em direitos de pessoas com autismo. Atendimento humanizado
              para famílias em todo o Brasil.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3 text-indigo-200">Links rápidos</p>
            <ul className="space-y-2 text-sm text-indigo-300">
              {[
                ['Sobre', '#sobre'],
                ['Áreas de atuação', '#atuacao'],
                ['Seus direitos', '#direitos'],
                ['Depoimentos', '#depoimentos'],
                ['Contato', '#contato'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3 text-indigo-200">Contato</p>
            <div className="space-y-2 text-sm text-indigo-300">
              <p>📧 contato@francielegross.com.br</p>
              <p>🌎 Atendimento online em todo o Brasil</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-indigo-400">
          <p>© {new Date().getFullYear()} Dra. Franciele Gross Augusto – Advocacia TEA. Todos os direitos reservados.</p>
          <p>OAB/SP 000.000 · Este site não constitui consultoria jurídica.</p>
        </div>
      </div>
    </footer>
  )
}
