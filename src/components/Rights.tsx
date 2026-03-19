const rights = [
  {
    icon: '📋',
    title: 'Lei Berenice Piana (Lei 12.764/2012)',
    description:
      'Reconhece o autismo como deficiência e garante acesso a educação, saúde, assistência social e proteção. É a base legal de todos os direitos das pessoas com TEA.',
  },
  {
    icon: '🏥',
    title: 'Cobertura obrigatória pelo plano de saúde',
    description:
      'Desde 2022, a Lei 14.454 obriga os planos a cobrirem todos os tratamentos com evidência científica para o autismo — incluindo ABA, fonoaudiologia, terapia ocupacional e psicologia.',
  },
  {
    icon: '💰',
    title: 'BPC/LOAS – Benefício de Prestação Continuada',
    description:
      'Pessoas com autismo em famílias de baixa renda têm direito a 1 salário mínimo por mês. Não é aposentadoria e não precisa ter contribuído ao INSS.',
  },
  {
    icon: '🏫',
    title: 'Direito à educação inclusiva',
    description:
      'Toda criança com autismo tem direito a matrícula em escola regular, com acompanhante terapêutico (AT) quando necessário, sem custo adicional para a família.',
  },
  {
    icon: '💊',
    title: 'Medicamentos pelo SUS',
    description:
      'O SUS é obrigado a fornecer medicamentos prescritos por médico, mesmo os de alto custo. A negativa pode ser contestada judicialmente com alta chance de sucesso.',
  },
  {
    icon: '🚌',
    title: 'Passe livre e isenções',
    description:
      'Pessoas com autismo têm direito a isenção de IPI na compra de veículos, passe livre no transporte interestadual e outros benefícios fiscais.',
  },
]

export default function Rights() {
  return (
    <section id="direitos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Conteúdo educativo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Direitos que você precisa conhecer
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Sem juridiquês. Explicações simples sobre o que a lei garante para
            pessoas com autismo e suas famílias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((r) => (
            <div
              key={r.title}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-bold text-indigo-900 mb-2 text-base">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-600 rounded-3xl p-8 text-center text-white">
          <p className="text-xl font-bold mb-2">Não sabe se tem direito?</p>
          <p className="text-indigo-200 mb-6">
            Me conta sua situação. A consulta inicial é gratuita e sem compromisso.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+meus+direitos+relacionados+ao+autismo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
          >
            Consulta gratuita agora
          </a>
        </div>
      </div>
    </section>
  )
}
