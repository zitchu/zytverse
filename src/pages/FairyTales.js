import React, { useState } from "react";
import acoite from "../components/img/tales/acoite.png";
import cico from "../components/img/tales/cico.png";
import dinda from "../components/img/tales/dinda.png";
import pedro from "../components/img/tales/pedro.png";
import rhoy from "../components/img/tales/rhoy.png";
import rufus from "../components/img/tales/rufus.png";

function FairyTales() {
  const [showSpoilers, setShowSpoilers] = useState(false);

  return (
    <div className="p-4 bg-[#2f4f4f] pt-[50px] min-h-screen text-white relative">
      {/* Botão de Spoilers */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setShowSpoilers(true)}
          className="bg-amber-200 text-[#2f4f4f] hover:bg-amber-300 px-6 py-3 rounded-lg font-bold cinzel-regular shadow-lg transition-all duration-300 hover:scale-105"
        >
          📖 Ver Resumo Cronológico
        </button>
      </div>

      {/* Modal de Spoilers */}
      {showSpoilers && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#f8f4e3] text-[#2f4f4f] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Cabeçalho do Modal */}
            <div className="sticky top-0 bg-[#2f4f4f] text-amber-200 p-6 rounded-t-xl flex justify-between items-center">
              <h2 className="text-2xl font-bold cinzel-black">
                📜 Resumo Cronológico das Lives de RPG
              </h2>
              <button
                onClick={() => setShowSpoilers(false)}
                className="text-amber-200 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 cinzel-regular space-y-6">
              <div className="mb-6">
                <p className="text-lg italic border-l-4 border-amber-400 pl-4 py-2 bg-amber-50">
                  O resumo cronológico da história contada nas <em>lives</em> de
                  RPG é o seguinte, baseado no material fornecido:
                </p>
              </div>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-[#2f4f4f] bg-amber-100 inline-block px-4 py-2 rounded">
                  I. O Contexto Histórico e a Origem do Tirano
                </h3>
                <ol className="list-decimal list-inside space-y-4 pl-4">
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">A Criação do Mundo:</span> O
                    mundo era originalmente dominado por{" "}
                    <strong>seres gigantescos e colossais</strong> que
                    guerreavam. Os primeiros povos de tamanho humano surgiram e
                    sobreviveram escondendo-se.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      Aliança com Dragões Metálicos:
                    </span>{" "}
                    Os <strong>dragões metálicos</strong> aliaram-se aos humanos
                    para derrotar esses gigantes. Ao serem abatidos por dragões,
                    a energia mágica dracônica ficava impregnada nos esqueletos
                    dos gigantes (Colossos). Cirtex, um dragão prateado, era um
                    aliado das gerações passadas da família real Ged.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      A Ascensão do Príncipe Gardie:
                    </span>{" "}
                    Sir Calen, um cavaleiro honrado, foi ordenado protetor do
                    Príncipe Gardie desde o seu nascimento, instruindo-o em
                    honra, disciplina e nobreza, tornando-o um príncipe
                    exemplar.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">A Ferida Mortal:</span> Aos
                    14 anos, Gardie perdeu o pai (o Rei) e, enquanto sua mãe, a
                    Rainha, governava, ele se envolveu em pequenas batalhas
                    contra reinos vizinhos que se movimentavam discretamente ao
                    norte. Em uma dessas batalhas, Gardie foi{" "}
                    <strong>ferido mortalmente</strong> próximo ao coração por
                    uma flecha.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      O Sacrifício de Cirtex:
                    </span>{" "}
                    Desesperada, a Rainha buscou o dragão Cirtex, um aliado
                    ancestral. Cirtex, após muita insistência e juramentos de
                    que Gardie seria um rei justo, doou{" "}
                    <strong>parte de seu coração draconiano</strong> para salvar
                    o príncipe. O presente salvou Gardie, conferindo-lhe saúde
                    sobrenatural e resistência.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      A Transformação em Tirano:
                    </span>{" "}
                    Gardie retornou, assumiu o trono e resolveu as inquietações
                    políticas. Contudo, ele gradualmente se tornou paranoico com
                    traições e começou a tomar medidas cada vez mais duras,
                    transformando-se em um <strong>tirano</strong>. Seu objetivo
                    se tornou expandir o reino, e após a morte de sua mãe, a
                    Rainha Lucílio, ele elevou impostos e aumentou o
                    recrutamento de tropas, preparando-se abertamente para a
                    guerra.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">A Deserção e o Plano:</span>{" "}
                    Sir Calen, por não suportar as decisões do Rei, traiu seu
                    juramento e <strong>abandonou a Corte</strong>. O dragão
                    Cirtex, decepcionado com o juramento quebrado, desapareceu,
                    evitando questões políticas humanas.
                  </li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-[#2f4f4f] bg-amber-100 inline-block px-4 py-2 rounded">
                  II. O Início da Missão e as Provações dos Heróis
                </h3>
                <ol className="list-decimal list-inside space-y-4 pl-4">
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      O Chamado e o Objetivo:
                    </span>{" "}
                    Os heróis (Dinda Ferry, Ciço, Roy of Wood, Açoite e Nevasca,
                    e Pedro) foram reunidos por seus mestres. Sir Calen revela o
                    plano: como o reino está muito protegido, a única forma de
                    derrotar Gardie é <strong>matar o dragão Cirtex</strong>,
                    pois a parte de seu coração que bate no peito do Rei também
                    morrerá. A missão inicial é encontrar{" "}
                    <strong>sete cristais</strong> (fragmentos da energia de
                    Cirtex) espalhados nos esqueletos dos Gigantes.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      O Sacrifício de Sir Calen:
                    </span>{" "}
                    A caminho do primeiro esqueleto, os heróis caem em uma
                    emboscada de bandidos disfarçados de viajantes com uma
                    carroça quebrada. Durante o combate, Ciço executa um bandido
                    que estava se rendendo. Sir Calen, que reapareceu, sacrifica
                    sua vida para{" "}
                    <strong>ressuscitar e curar Dinda Ferry</strong>, honrando a
                    missão. Robert, o executor de ordens de Calen, se torna o
                    guia do grupo.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      O Encontro na Montanha Vulcânica (Segundo Cristal):
                    </span>{" "}
                    O grupo segue para uma montanha vulcânica. Ciço é
                    confrontado por Trick (o Saci), que o acusa de ser indigno
                    do seu gorro e revela que <strong>Ciço é um saci</strong>{" "}
                    que estava sendo protegido por sua tia Nena. Ciço cede o
                    gorro a Trick. Dentro da caverna, eles lutam contra
                    cultistas que usam magia. O segundo cristal é coletado do
                    tórax do gigante, e Roy passa por uma grande reflexão sobre
                    seu propósito.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      A Caverna das Provações:
                    </span>{" "}
                    A jornada leva-os ao Vale das Cachoeiras, passando pela
                    Caverna das Provações, onde são testados individualmente,
                    ganhando introspecção sobre seus propósitos (Roy busca ser
                    um revolucionário, Ciço busca aprovação, Açoite busca
                    aceitação, Dinda busca ajudar e Pedro busca alegria).
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      O Circo e a Decisão Moral:
                    </span>{" "}
                    Ao saírem, eles encontram o esqueleto de um gigante e um
                    circo liderado por Tamborim. Tamborim explica que a energia
                    mágica da essência do gigante é o que fertiliza a região,
                    fazendo seus filhos e animais crescerem gigantes. O palhaço
                    implora para que os heróis{" "}
                    <strong>não levem o cristal</strong>, pois condenaria toda a
                    vida no vale. Os heróis decidem temporariamente{" "}
                    <strong>deixar o cristal para trás</strong>.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      Os Gigantes Gêmeos (Dois Cristais):
                    </span>{" "}
                    O grupo encontra o esqueleto de Gigantes Gêmeos, onde dois
                    golems (ET e TIM) lutam incessantemente, alimentados pelas
                    essências dos gigantes. O grupo convence ET e TIM a pararem
                    de lutar e aceitar a missão de enfrentar o Rei. Eles{" "}
                    <strong>coletam dois cristais</strong>.
                  </li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-[#2f4f4f] bg-amber-100 inline-block px-4 py-2 rounded">
                  III. O Confronto Final e o Epílogo
                </h3>
                <ol className="list-decimal list-inside space-y-4 pl-4">
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      A Incursão na Capital:
                    </span>{" "}
                    Com quatro (ou cinco) cristais coletados, o grupo precisa do
                    último fragmento localizado na capital, mas eles sabem que{" "}
                    <strong>faltam dois</strong> para a energia ser suficiente
                    (o do circo e o da capital). A capital é encontrada
                    drasticamente alterada: uma montanha foi magicamente
                    removida e a cidade agora está à beira-mar.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      Infiltração e o Último Cristal:
                    </span>{" "}
                    Os heróis se infiltram no castelo pelo esgoto, alegando
                    estarem buscando trabalho. Eles localizam o fragmento final
                    no subsolo, incrustado no crânio de um esqueleto gigante.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      A Morte de Dinda e do Rei:
                    </span>{" "}
                    Ao coletar o último fragmento (o sexto),{" "}
                    <strong>Rei Gardie</strong> aparece e confronta os heróis,
                    demonstrando poderes mágicos intensos. Durante o combate,
                    Gardie usa uma baforada de gelo para{" "}
                    <strong>matar Dinda Ferry</strong>. Os heróis, assistidos
                    por Trick (que reaparece), lutam e Ciço usa um toque
                    chocante poderoso para <strong>matar o Rei Gardie</strong>.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">O Desfecho (Epílogo):</span>{" "}
                    Os heróis recuperam o corpo de Dinda e, com a energia de
                    todos os cristais, viajam para o Norte para encontrar
                    Cirtex. Eles convencem o dragão a ressuscitar Dinda.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">O Novo Reino:</span> Dinda
                    Ferry é indicada como a{" "}
                    <strong>regente interina do reino</strong>. Roy of Wood
                    aceita humildemente o cargo de Conselheiro. Ciço parte da
                    Capital em busca de seu povo e de autoconhecimento. Açoite e
                    Nevasca se afastam, retornando à floresta, convencidos de
                    que nem todo humano é ruim.
                  </li>
                </ol>
              </section>

              {/* Botão para fechar no rodapé */}
              <div className="sticky bottom-0 bg-[#f8f4e3] pt-6 border-t border-amber-200">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowSpoilers(false)}
                    className="bg-[#2f4f4f] text-amber-200 hover:bg-[#3a5f5f] px-8 py-3 rounded-lg font-bold cinzel-regular transition-all duration-300"
                  >
                    Fechar Resumo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Container principal para organizar layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Coluna da esquerda - Imagem do dragão */}
        <div className="lg:w-1/4 flex justify-center lg:justify-start lg:sticky lg:top-20 lg:self-start">
          <img
            src="https://www.pngmart.com/files/22/Ancient-Silver-Dragon-PNG-File.png"
            className="w-64 lg:w-full max-w-xs object-contain"
            alt="Ancient Silver Dragon"
          />
        </div>

        {/* Coluna central - Texto */}
        <div className="lg:w-1/2">
            <div className=" w-full mt-4">
              <div className="flex flex-row justify-center items-center   py-2">
                <img
                  src={acoite}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
                  alt="acoite"
                />
                <img
                  src={cico}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
                  alt="cico"
                />
                <img
                  src={dinda}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
                  alt="dinda"
                />
                <img
                  src={rufus}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
                  alt="rufus"
                />
                <img
                  src={rhoy}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
                  alt="rhoy"
                />
                
                <img
                  src={pedro}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
                  alt="pedro"
                />
              </div>
            </div>
          <div className="cinzel-regular bg-[#3a5f5f]/30 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-3xl lg:text-4xl font-bold cinzel-black text-center mb-8 text-amber-200">
              Not so fairy tales
            </h1>

            <div className="space-y-6">
              <p className="text-justify leading-relaxed text-lg">
                Sir. Kalain foi ordenado protetor do príncipe Gerd desde o
                nascimento da criança. Honrado cavaleiro de sua majestade,
                Kalain educou o príncipe ao máximo que pode, fazendo da criança
                um príncipe exemplar, obediente aos pais e atento a todo tipo de
                ensinamento preparando-o a ser um bom rei no futuro.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Os anos se passaram e em seu aniversário de 14 anos, Gerd perdeu
                seu pai, mas ainda não havia completado sua preparação para se
                tornar rei, e a rainha Lucyle, sua mãe, governou pelos próximos
                anos.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Com a morte do rei e a continuação do preparo do príncipe,
                reinos vizinhos começaram a se movimentar pelo poder, uma vez
                que a rainha era vista pelos vizinhos como suplente e viram a
                decisão de Gerd de se preparar melhor como fraqueza, dada sua
                idade "adulta" de 14 anos.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Algumas pequenas e veladas batalhas se seguiram, para atiçar e
                intimidar o povo do reino a encontrar fraquezas no governo
                atual, e numa tentativa de Gerd de responder às dúvidas que o
                cercavam, foi mortalmente atingido em combate por uma flecha
                próxima ao coração. No desespero de perder tudo que tinha,
                Lucyle recorreu em sua urgência ao dragão Cirtex, um nobre
                dragão prateado que habitava a região da batalha.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Cirtex não participava das políticas humanas, e embora tenha
                sido um aliado no passado do reino, não quis se envolver,
                alegando que a morte é natural e que não haviam motivos
                importantes para a humanidade que justificassem seu pedido, mas
                a rainha foi insistente e implorou a ajuda de Cirtex contando
                ainda com a jura de honra cavaleiresca de Sir Kalain de que Gerd
                continuaria o legado de seu pai com um reino pacífico e justo
                para os seus e os vizinhos. Cirtex acabou por ceder parte de seu
                coração para salvar o príncipe e, confiando nas promessas que
                lhe foram feitas, consentiu em dar-lhe tão valioso presente.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Gerd sobreviveu e herdou uma saúde sobrenatural, resistência e
                fôlego super-humanos, e uma avidez inigualável pela vida. Tão
                logo subiu à coroa, Gerd silenciou com firmeza os atos rebeldes
                e, como foi ensinado, manteve o reino em seu controle com apoio
                do conselho e clamor do povo.
              </p>
            </div>
          </div>

          <div className="cinzel-regular bg-[#3a5f5f]/30 p-6 rounded-lg backdrop-blur-sm mt-8">
            <div className="space-y-6">
              <p className="text-justify leading-relaxed text-lg">
                Os anos seguintes não foram tão nobres quantos os primeiros.
                Gerd passou a ser neurótico com seu poder, e herdando de sua mãe
                uma desconfiança infundada, passou a ter punhos de ferro no
                controle do reino, respondendo com excessiva força a qualquer
                questionamento ou sequer conversa sobre sua sucessão.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Em seus constantes debates contra Sir Kalain, Gerd deixou claro
                que sua vontade seria feita a despeito dos conselhos e por vezes
                ações secretas de Kalain para salvar alguns alvos da fúria do
                rei.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                O preparado se tornou tirano, o saudável se tornou um câncer
                contra a liberdade de seu povo e a ideia de expandir o reino
                logo veio, o que em sua cabeça era uma forma de defesa da coroa.
                Tornou-se a gota d'água para Kalain, que se tornou um pária do
                rei e deixou a corte para tentar ações pelo reino e não por seu
                antigo protegido, o rei.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Com a morte de Lucyle, alguns anos depois, as últimas restrições
                morais de Gerd se foram, e o rei passou a cobrar altos impostos
                de seu povo para financiar seu projeto de expansão. Os
                juramentos feitos a Cirtex caíram pelas qualidades e defeitos
                humanos, abastecidos de parte de seu coração dracônico.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Decepcionado pelas juras feitas a ele, Cirtex se recolheu e se
                escondeu de todos, negando ajuda a qualquer humano que o
                procurasse ou a qualquer outro que buscasse ajuda.
              </p>
            </div>
          </div>

          <div className="cinzel-regular bg-[#3a5f5f]/30 p-6 rounded-lg backdrop-blur-sm mt-8">
            <h1 className="text-2xl font-bold cinzel-black text-center mb-6 text-amber-200">
              Você foi chamado
            </h1>
            <p className="text-justify leading-relaxed text-lg">
              Urgentemente por seu mestre ao encontro dele e a você foi entregue
              uma carta selada com cera de vela e o emblema real. Pode ser visto
              também no pergaminho uma gota de sangue selando com uma heráldica
              peculiar ao lado do símbolo real e se apresenta prontamente a
              conhecer o motivo que lhe trouxe ali. Seu mestre corrobora a
              importância de sua presença e roga por sua participação na demanda
              a seguir, que carrega toda a liberdade do reino em seu desenrolar.
              Sir. Kalain se apresenta a vocês, que se veem pela primeira vez, e
              os saúda.
            </p>
          </div>
        </div>

        {/* Coluna da direita - Imagem do paladino */}
        <div className="lg:w-1/4 flex justify-center lg:justify-end lg:sticky lg:top-20 lg:self-start">
          <img
            src="https://static.wikia.nocookie.net/dungeon-survivor-ii/images/b/b2/Paladin.png"
            className="w-64 lg:w-full max-w-xs object-contain"
            alt="Paladin"
          />
        </div>
      </div>
    </div>
  );
}

export default FairyTales;
