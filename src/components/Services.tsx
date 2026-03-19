import { whatsappLink } from '../App'

const services = [
  {
    icon: '🏥',
    title: 'Plano de saúde negando terapias',
    description:
      'ABA, fonoaudiologia, terapia ocupacional, psicologia — se o plano negou, você pode recorrer na Justiça. A lei obriga a cobertura de todos os tratamentos prescritos para o autismo.',
    tag: 'Muito comum',
    tagColor: 'bg-red-100 text-red-700',
  },
  {
    icon: '💊',
    title: 'Medicamentos de alto custo',
    description:
      'Remédios caros que o plano ou o SUS não fornecem podem ser obtidos judicialmente. Você não precisa escolher entre pagar as contas e tratar seu filho.',
    tag: 'Urgente',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: '🏛️',
    title: 'Tratamento pelo SUS',
    description:
      'Fila de espera longa, falta de vagas, atendimento negado? O SUS tem obrigação legal de oferecer tratamento integral para pessoas com TEA. Vamos garantir isso.',
    tag: 'Direito garantido',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '💰',
    title: 'Benefício BPC/LOAS',
    description:
      'O BPC é um salário mínimo mensal para pessoas com deficiência em situação de vulnerabilidade. Muitos pedidos são negados indevidamente — e podem ser revertidos.',
    tag: 'Renda garantida',
    tagColor: 'bg-green-100 text-green-700',
  },
]

export default function Services() {
  return (
    <section id="atuacao" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Áreas de atuação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Em que posso te ajudar?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Se você está enfrentando alguma dessas situações, saiba que existe solução.
            Não aceite um "não" como resposta final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-indigo-50"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{s.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-bold text-indigo-900 text-lg">{s.title}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.tagColor}`}>
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Quero resolver meu caso
          </a>
        </div>
      </div>
    </section>
  )
}
