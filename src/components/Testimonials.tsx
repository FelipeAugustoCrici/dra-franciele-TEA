const testimonials = [
  {
    name: 'Mariana S.',
    location: 'São Paulo, SP',
    text: 'O plano de saúde negou as terapias do meu filho por 2 anos. Em menos de 3 meses com a Dra. Franciele, conseguimos a cobertura completa. Não tenho palavras para agradecer.',
    stars: 5,
    tag: 'Plano de saúde',
  },
  {
    name: 'Roberto e Cláudia F.',
    location: 'Campinas, SP',
    text: 'Tentamos o BPC sozinhos e fomos negados duas vezes. A Dra. Franciele entrou com recurso e em 4 meses meu filho passou a receber o benefício. Atendimento incrível, muito humano.',
    stars: 5,
    tag: 'BPC/LOAS',
  },
  {
    name: 'Fernanda L.',
    location: 'Rio de Janeiro, RJ',
    text: 'Minha filha precisava de um medicamento que custava R$ 800 por mês. Hoje o SUS fornece gratuitamente. O atendimento foi online, rápido e muito acolhedor.',
    stars: 5,
    tag: 'Medicamento pelo SUS',
  },
  {
    name: 'Tatiane M.',
    location: 'Belo Horizonte, MG',
    text: 'Fui indicada por uma amiga e não me arrependo. A Dra. explica tudo de forma simples, sem termos difíceis. Me senti acolhida desde o primeiro contato.',
    stars: 5,
    tag: 'Atendimento',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Famílias que encontraram seus direitos
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Cada história é única. Cada vitória, real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <Stars count={t.stars} />
                <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-indigo-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
