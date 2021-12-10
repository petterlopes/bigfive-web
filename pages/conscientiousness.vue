<template>
  <v-card>
    <v-img
      :src="require('@/assets/conscientiousness.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('conscientiousness.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        Consciência diz respeito à maneira pela qual controlamos, regulam e direcionamos nossos impulsos.
      </p>
      <p>
        Impulsos não são inerentemente ruins;Ocasionalmente restrições de tempo exigem uma decisão de pressão, e atuando em nosso primeiro impulso pode ser uma resposta eficaz.
        Além disso, em tempos de jogo em vez de trabalhar, agindo espontaneamente e impulsivamente pode ser divertido.
        Indivíduos impulsivos podem ser vistos por outros como colorido, divertido de ser - com e Zany.
        No entanto, atuar em impulso pode levar a problemas de várias maneiras.
        Alguns impulsos são antissociais.
      </p>

      <blockquote class="blockquote">
        <v-icon>{{ mdiFormatQuoteOpen }}</v-icon>
        A abertura à experiência descreve uma dimensão do estilo cognitivo que distingue as pessoas criativas, pessoas convencionais.
        <v-icon>{{ mdiFormatQuoteClose }}</v-icon>
      </blockquote>

      <p>
        Atos antissociais não controlados não só prejudicam outros membros da sociedade, mas também podem resultar em retribuição para o perpetrador de tais atos impulsivos.
        Outro problema com atos impulsivos é que eles geralmente produzem recompensas imediatas, mas consequências indesejáveis e de longo prazo.
        Os exemplos incluem a socialização excessiva que leva a ser demitida do trabalho de alguém, arremessando um insulto que causa o rompimento de um relacionamento importante, ou usando drogas induzidas por prazer que eventualmente destruam a saúde.
        Comportamento impulsivo, mesmo quando não seriamente destrutivo, diminui a eficácia de uma pessoa de maneiras significativas.
        Atuando impulsivamente desperdiçando contemplando cursos alternativos de ação, alguns dos quais teriam sido mais sábios que a escolha impulsiva.
        A impulsividade também perdeu as pessoas durante projetos que exigem seqüências organizadas de etapas ou etapas.
        As realizações de uma pessoa impulsiva são, portanto, pequenas, espalhadas e inconsistentes.
        Uma marca registrada da inteligência, o que potencialmente separa os seres humanos das formas anteriores da vida, é a capacidade de pensar em conseqüências futuras antes de agir em um impulso.
        A atividade inteligente envolve a contemplação de metas de longo alcance, organizando e planejando rotas para esses objetivos e persistindo em direção a objetivos em face de impulsos de curta duração em contrário.
        A ideia de que a inteligência envolve o controle de impulso é bem capturada pelo termo prudência, uma etiqueta alternativa para o domínio do conscienciosidade.
        Prudente significa tanto sábio quanto cauteloso.
        As pessoas que pontuam no alto da escala de consciência são, de fato, percebidas por outros como inteligentes.
        Os benefícios da alta consciência são óbvios.
        Indivíduos conscientes evitam problemas e alcançam altos níveis de sucesso através do planejamento e persistência intencionais.
        Eles também são positivamente considerados por outros tão inteligentes e confiáveis.
        No lado negativo, eles podem ser perfeccionistas compulsivos e workaholics.
        Além disso, indivíduos extremamente conscientes podem ser considerados abafados e chatos.
        As pessoas inconscientes podem ser criticadas por sua falta de facilidade, falta de ambição, e fracasso em ficar dentro das linhas, mas eles experimentarão muitos prazeres de curta duração e nunca serão chamados de abafado.
      </p>

      <div class="title">
        Auto-eficácia
      </div>
      <p>
        A autoeficácia descreve a confiança na capacidade de realizar as coisas.Os maiores pontuadores acreditam que têm a inteligência (senso comum), a unidade e o autocontrole necessário para alcançar o sucesso.Artilheiros baixos não se sentem eficazes, e podem ter uma sensação de que não estão no controle de suas vidas.
      </p>

      <div class="title">
        Ordem
      </div>
      <p>
        As pessoas com altas pontuações na ordem são bem organizadas.Eles gostam de viver de acordo com rotinas e horários.Eles mantêm listas e fazem planos.Baixos marcadores tendem a ser desorganizados e espalhados.
      </p>

      <div class="title">
        Obediencia
      </div>
      <p>
        Essa escala reflete a força do senso de dever e da obrigação de uma pessoa.Aqueles que pontuam altos nesta escala têm um forte senso de obrigação moral.Baixos marcadores encontram contratos, regras e regulamentos excessivamente confinando.É provável que eles sejam vistos como não confiáveis ou mesmo irresponsáveis.
      </p>

      <div class="title">
        Esforço de realização
      </div>
      <p>
        Indivíduos que pontuam altos nesta escala se esforçam para alcançar a excelência.Sua unidade para ser reconhecida como bem-sucedida os mantém no caminho para seus objetivos elevados.Eles muitas vezes têm um forte senso de direção na vida, mas pontuações extremamente altas podem ser muito mesquinhas e obcecadas com o seu trabalho.Baixos marcadores estão contentes para obter com uma quantidade mínima de trabalho, e podem ser vistos por outros como preguiçosos.
      </p>

      <div class="title">
        Autodisciplina
      </div>
      <p>
        Autodisciplina - O que muitas pessoas chamam de poder-poder - refere-se à capacidade de persistir em tarefas difíceis ou desagradáveis até que sejam concluídas.As pessoas que possuem alta autodisciplina são capazes de superar a relutância em iniciar tarefas e ficar no caminho certo, apesar das distrações.Aqueles com baixa autodisciplina procrastinar e mostrar um seguimento ruim, muitas vezes deixando de concluir tarefas - até mesmo tarefas que eles querem muito completar.
      </p>

      <div class="title">
        Cautela
      </div>
      <p>
        A cautela descreve a disposição para pensar através de possibilidades antes de agir.Os maiores pontuadores na escala de cautela tomam seu tempo ao tomar decisões.Baixos marcadores costumam dizer ou fazer uma primeira coisa que chega à mente sem deliberar alternativas e as prováveis conseqüências dessas alternativas.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Conscientiousness',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('conscientiousness.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('conscientiousness.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('conscientiousness.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('conscientiousness.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('conscientiousness.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('conscientiousness.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('conscientiousness.seo.description') }
      ]
    }
  }
}
</script>

<style>
.image-title {
  font-family: 'Passion One', cursive;
  font-size: 3rem;
  text-transform: uppercase;
}
</style>
