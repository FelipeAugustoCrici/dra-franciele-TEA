import { whatsappLink } from '../App'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🧩 Especialista em Direitos do Autismo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 leading-tight mb-6">
            Seu filho tem direitos.<br />
            <span className="text-purple-600">Eu luto por eles.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Plano de saúde negando terapias? SUS sem atendimento? Benefício recusado?
            Você não precisa enfrentar isso sozinho. Estou aqui para garantir que cada criança
            com autismo receba o que é seu por direito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.871.936-3.618-.235-.372A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#direitos"
              className="inline-flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all"
            >
              Saiba seus direitos
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            ✅ Consulta inicial gratuita &nbsp;·&nbsp; ✅ Atendimento online em todo o Brasil
          </p>
        </div>

        {/* Illustration card */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">🧩</div>
                <p className="text-indigo-800 font-semibold text-lg">Cada peça importa.</p>
                <p className="text-purple-600 text-sm mt-1">Cada direito também.</p>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 text-center">
              <p className="text-2xl font-bold text-indigo-700">500+</p>
              <p className="text-xs text-gray-500">famílias atendidas</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 text-center">
              <p className="text-2xl font-bold text-green-600">98%</p>
              <p className="text-xs text-gray-500">casos resolvidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
