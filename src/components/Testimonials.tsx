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
  {
    name: 'Carlos e Renata P.',
    location: 'Florianópolis, SC',
    text: 'Conseguimos a acompanhante terapêutica na escola do nosso filho em tempo recorde. A Dra. Franciele foi incansável. Recomendo de olhos fechados.',
    stars: 5,
    tag: 'Educação inclusiva',
  },
  {
    name: 'Simone A.',
    location: 'Porto Alegre, RS',
    text: 'Estava desesperada com as negativas do plano. Em poucos meses tudo foi resolvido. Profissional competente, atenciosa e que realmente se importa com as famílias.',
    stars: 5,
    tag: 'Plano de saúde',
  },
]

const CARD_W = 344
const TOTAL_W = CARD_W * testimonials.length

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

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      style={{ width: `${CARD_W - 24}px`, marginLeft: '12px', marginRight: '12px', flexShrink: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-50"
    >
      <div className="flex items-center justify-between mb-3">
        <Stars count={t.stars} />
        <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
          {t.tag}
        </span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-indigo-900 text-sm">{t.name}</p>
          <p className="text-xs text-gray-500">{t.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0px); }
          100% { transform: translateX(-${TOTAL_W}px); }
        }
        .marquee-track {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 text-center mb-14">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Depoimentos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Famílias que encontraram seus direitos
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">Cada história é única. Cada vitória, real.</p>
      </div>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #f5f3ff, transparent)' }} />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #eef2ff, transparent)' }} />

        <div className="marquee-track" style={{ display: 'flex', width: `${TOTAL_W * 2}px` }}>
          {testimonials.map((t, i) => <Card key={`a-${i}`} t={t} />)}
          {testimonials.map((t, i) => <Card key={`b-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  )
}
