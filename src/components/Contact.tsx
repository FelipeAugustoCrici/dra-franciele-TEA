import { whatsappLink } from '../App'

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Contato
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Pronto para dar o primeiro passo?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          A consulta inicial é gratuita. Me conta sua situação pelo WhatsApp e
          vamos descobrir juntos quais direitos você pode garantir.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: '💬',
              title: 'WhatsApp',
              desc: 'Resposta rápida, atendimento humanizado',
              action: (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-green-600 hover:underline"
                >
                  Iniciar conversa →
                </a>
              ),
            },
            {
              icon: '📧',
              title: 'E-mail',
              desc: 'contato@francielegross.com.br',
              action: (
                <a
                  href="mailto:contato@francielegross.com.br"
                  className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:underline"
                >
                  Enviar e-mail →
                </a>
              ),
            },
            {
              icon: '🌎',
              title: 'Atendimento online',
              desc: 'Em todo o Brasil, sem sair de casa',
              action: (
                <span className="mt-3 inline-block text-sm text-gray-500">
                  100% digital
                </span>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-indigo-50 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="font-bold text-indigo-900">{item.title}</p>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              {item.action}
            </div>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-full text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.871.936-3.618-.235-.372A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Falar no WhatsApp agora
        </a>
        <p className="mt-4 text-sm text-gray-500">Consulta inicial gratuita · Sem compromisso</p>
      </div>
    </section>
  )
}
