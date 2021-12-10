<template>
  <v-card>
    <v-img
      :src="require('@/assets/openness.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('agreeableness.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        A amabilidade reflete as diferenças individuais na preocupação com a cooperação e a harmonia social. Indivíduos agradáveis valorizam se dar bem com os outros.
      </p>
      <p>
        Eles são, portanto, atenciosos, amigáveis, generosos, prestativos e dispostos a comprometer seus interesses com os dos outros. Pessoas agradáveis   também têm uma visão otimista da natureza humana. Eles acreditam que as pessoas são basicamente honestas, decentes e confiáveis. Indivíduos desagradáveis   colocam o interesse próprio acima de se dar bem com os outros. Eles geralmente não se preocupam com o bem-estar dos outros e, portanto, é improvável que se estendam para outras pessoas. Às vezes, seu ceticismo sobre os motivos dos outros faz com que sejam desconfiados, hostis e não cooperativos.
      </p>

      <blockquote class="blockquote">
        <v-icon>{{ mdiFormatQuoteOpen }}</v-icon>
        A amabilidade reflete as diferenças individuais na preocupação com a cooperação e harmonia social.
        <v-icon>{{ mdiFormatQuoteClose }}</v-icon>
      </blockquote>

      <p>
        A amabilidade é obviamente vantajosa para alcançar e manter a popularidade. Pessoas agradáveis   são mais queridas do que pessoas desagradáveis. Por outro lado, a afabilidade não é útil em situações que exigem decisões difíceis ou objetivas absolutas. Pessoas desagradáveis   podem ser excelentes cientistas, críticos ou soldados.
      </p>

      <div class="title">
        Confiar
      </div>
      <p>
        Pessoas com pontuação alta nessa escala não veem necessidade de fingimento ou manipulação ao lidar com outras pessoas e, portanto, são francas, francas e sinceras. Pessoas com pontuação baixa acreditam que uma certa dose de engano nas relações sociais é necessária. As pessoas acham relativamente fácil se relacionar com os diretores de pontuação mais alta nessa escala. Eles geralmente acham mais difícil se relacionar com os pontuadores menos diretos nesta escala. Deve ficar claro que indivíduos com pontuação baixa não são sem princípios ou imorais; eles são simplesmente mais cautelosos e menos dispostos a revelar abertamente toda a verdade.
      </p>

      <div class="title">
        Moralidade
      </div>
      <p>
        Altos marcadores nesta escala não vêem necessidade de fingimento ou manipulação ao lidar com os outros e são, portanto, sinceros, Frank e sincero.Baixos artilheiros acreditam que uma certa quantidade de decepção nas relações sociais é necessária.As pessoas acham relativamente fácil de se relacionar com os high-streters diretos nesta escala.Eles geralmente acham mais difícil se relacionar com os artilheiros de baixo desenterramento nessa escala.Deve ficar claro que os baixos artilheiros não são sem princípios ou imorais;Eles são simplesmente mais guardados e menos dispostos a revelar abertamente toda a verdade.
      </p>

      <div class="title">
        Altruísmo
      </div>
      <p>
        Pessoas altruístas acham que ajudar outras pessoas é genuinamente gratificante. Conseqüentemente, eles geralmente estão dispostos a ajudar aqueles que precisam. Pessoas altruístas descobrem que fazer coisas para os outros é uma forma de autorrealização, em vez de auto-sacrifício. Pessoas com pontuação baixa nessa escala não gostam de ajudar os necessitados. Os pedidos de ajuda parecem mais uma imposição do que uma oportunidade para a autorrealização.
      </p>

      <div class="title">
        Cooperação
      </div>
      <p>
        Indivíduos com pontuação alta nesta escala não gostam de confrontos. Eles estão perfeitamente dispostos a transigir ou negar suas próprias necessidades para se darem bem com os outros. Aqueles que têm pontuação baixa nessa escala são mais propensos a intimidar os outros para conseguir o que querem.
      </p>

      <div class="title">
        Modéstia
      </div>
      <p>
        Pessoas com pontuação alta nesta escala não gostam de afirmar que são melhores do que as outras pessoas. Em alguns casos, essa atitude pode ser derivada de baixa autoconfiança ou autoestima. No entanto, algumas pessoas com elevada auto-estima consideram a falta de recato imprópria. Aqueles que estão dispostos a se descrever como superiores tendem a ser vistos como desagradavelmente arrogantes pelas outras pessoas.
      </p>

      <div class="title">
        Simpatia
      </div>
      <p>
        Pessoas com pontuação alta nesta escala são compassivas e compassivas. Eles sentem a dor dos outros indiretamente e são facilmente levados à piedade. Pessoas com pontuação baixa não são afetadas fortemente pelo sofrimento humano. Eles se orgulham de fazer julgamentos objetivos com base na razão. Eles estão mais preocupados com a verdade e a justiça imparcial do que com a misericórdia.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Agreeableness',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('agreeableness.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('agreeableness.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('agreeableness.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('agreeableness.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('agreeableness.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('agreeableness.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('agreeableness.seo.description') }
      ]
    }
  },
  metaInfo: {
    title: 'Read more about Agreeableness'
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
