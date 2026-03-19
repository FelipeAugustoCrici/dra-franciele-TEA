export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Photo placeholder */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-72 h-80 bg-gradient-to-b from-indigo-100 to-purple-100 rounded-3xl flex items-end justify-center shadow-xl">
              <div className="text-center pb-6">
                <img src="/person.png" alt="Dra. Franciele Gross Augusto" className="w-48 h-48 object-cover object-top rounded-2xl mx-auto mb-3" />
                <p className="font-bold text-indigo-800">Dra. Franciele Gross</p>
                <p className="text-sm text-purple-600">OAB/SP 000.000</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-indigo-600 text-white rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold">+8 anos de experiência</p>
              <p className="text-xs opacity-80">em direitos do autismo</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Sobre mim
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            Mais do que uma advogada,<br />
            <span className="text-purple-600">sou uma aliada da sua família.</span>
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Sei o quanto é difícil navegar pelo sistema de saúde e previdência quando você tem
              um filho com autismo. As negativas chegam, os prazos passam, e a sensação de
              impotência é real.
            </p>
            <p>
              Por isso escolhi me especializar nos direitos das pessoas com TEA. Não é só uma
              área jurídica para mim — é uma causa. Cada família que atendo me lembra por que
              escolhi o Direito.
            </p>
            <p>
              Trabalho com linguagem simples, atendimento humanizado e foco total em resultados.
              Você não precisa entender de lei para me contratar. Precisa apenas confiar que
              alguém vai lutar por você.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { icon: '🎓', label: 'Especialista em Direito da Saúde' },
              { icon: '🏛️', label: 'Pós-graduada em Direito Previdenciário' },
              { icon: '💙', label: 'Atendimento humanizado' },
              { icon: '🌎', label: 'Atendimento online em todo o Brasil' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-indigo-50 rounded-xl p-3">
                <span className="text-xl">{item.icon}</span>
                <p className="text-sm text-indigo-800 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
