import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Receita Junina • Desafio 26',
  description: 'Desafio 26 do bora codar da Rocketseat.',
}

export default function JuneRevenue() {
  return (
    <main className="font-sourceSerif w-screen h-screen">
      <section className="w-screen h-1/2 bg-challenge26Brown-300 flex items-center justify-center gap-14">
        <Image src="/pamonha.png" alt="pamonha" width={409} height={293} />
        <div className="space-y-6">
          <h1 className="font-bold text-challenge26Brown-700 text-7xl">
            Pamonha
          </h1>
          <p className="font-semibold text-challenge26Brown-700 text-4xl">
            Prato típico com milho verde ralado
          </p>
          <div className="flex items-center text-challenge26Brown-500 text-4xl gap-4">
            <span>Porções</span>
            <button
              className="rounded-full border-2 border-challenge26Brown-500"
              type="button"
            >
              <Minus />
            </button>
            <span>01</span>
            <button
              className="rounded-full border-2 border-challenge26Brown-500"
              type="button"
            >
              <Plus />
            </button>
          </div>
        </div>
      </section>
      <section className="w-screen h-1/2 bg-challenge26Brown-500 flex items-center justify-center gap-16">
        <div>
          <span className="font-bold text-challenge26Brown-300 text-4xl">
            Ingredientes
          </span>
          <ul className="font-sourceSans list-disc text-challenge26Brown-300 text-2xl">
            <li> 1 espiga de milho verde</li>
            <li> 1 colher de sopa de açúcar</li>
            <li> 1 colher de sopa de manteiga</li>
            <li> Sal a gosto</li>
            <li> Palha de milho (para embrulhar)</li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-challenge26Brown-300 text-4xl">
            Modo de preparo
          </span>
          <ul className="font-sourceSans list-decimal text-challenge26Brown-300 text-2xl">
            <li> Descasque a espiga de milho e corte os grãos.</li>
            <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
            <li>Coloque a massa nas palhas de milho e feche bem.</li>
            <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
            <li>Deixe esfriar e sirva.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
