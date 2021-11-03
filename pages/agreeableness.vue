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
        A responsabilidade reflete diferenças individuais em preocupação com a cooperação e a harmonia social.Indivíduos agradáveis valorizam-se com os outros.
      </p>
      <p>
        Eles são, portanto, atenciosos, amigáveis, generosos, úteis e dispostos a comprometer seus interesses com os outros.
        As pessoas agradáveis também têm uma visão otimista da natureza humana.
        Eles acreditam que as pessoas são basicamente honestas, decentes e confiáveis.
        Indivíduos desagradáveis colocam o interesse próprio acima com os outros.
        Eles geralmente são despreocupados com o bem-estar dos outros e, portanto, são improváveis de se estenderem para outras pessoas.
        Às vezes, seu ceticismo sobre os motivos dos outros faz com que eles sejam suspeitos, hostis e não cooperativos.
      </p>

      <blockquote class="blockquote">
        <v-icon>{{ mdiFormatQuoteOpen }}</v-icon>
        A responsabilidade reflete as diferenças individuais em preocupação com a cooperação e a harmonia social.
        <v-icon>{{ mdiFormatQuoteClose }}</v-icon>
      </blockquote>

      <p>
        A agricultura é obviamente vantajosa para atingir e manter a popularidade.
        As pessoas agradáveis são melhores do que pessoas desagradáveis.
        Por outro lado, a agradaidade não é útil em situações que exigem decisões objetivas difíceis ou absolutas.
        Pessoas desagradáveis podem fazer excelentes cientistas, críticos ou soldados.
      </p>

      <div class="title">
        Confiar
      </div>
      <p>
        Uma pessoa com alta confiança assume que a maioria das pessoas é justa, honesta e tem boas intenções.Pessoas baixas em confiança vêem os outros como egoístas, desonestos e potencialmente perigosos.
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
        As pessoas altruístas acham ajudando outras pessoas genuinamente gratificantes.Consequentemente, eles geralmente estão dispostos a ajudar aqueles que estão precisando.As pessoas altruístas acham que fazer coisas para os outros é uma forma de auto-realização em vez de auto-sacrifício.Baixos marcadores nesta escala não são particularmente como ajudar os necessitados.Pedidos de ajuda se sentir como uma imposição em vez de uma oportunidade para a auto-realização.
      </p>

      <div class="title">
        Cooperação
      </div>
      <p>
        Indivíduos que pontuam altos nesta escala não gostam de confrontos.Eles estão perfeitamente dispostos a comprometer ou negar suas próprias necessidades para se dar bem com os outros.Aqueles que marcam baixo nessa escala são mais propensos a intimidar os outros para obter o seu caminho.
      </p>

      <div class="title">
        Modéstia
      </div>
      <p>
        Os maiores marcadores nesta escala não gostam de reivindicar que são melhores do que outras pessoas.Em alguns casos, essa atitude pode derivar de baixa autoconfiança ou auto-estima.No entanto, algumas pessoas com auto-estima alta acham imodestada inesperada.Aqueles que estão dispostos a se descrever como superiores tendem a ser vistos como desagradavelmente arrogantes por outras pessoas.
      </p>

      <div class="title">
        Simpatia
      </div>
      <p>
        As pessoas que pontuam altas nesta escala são sensíveis e compassivas.Eles sentem a dor dos outros vicariamente e são facilmente movidos para pena.Artilheiros baixos não são afetados fortemente pelo sofrimento humano.Eles se orgulham de fazer julgamentos objetivos com base na razão.Eles estão mais preocupados com a verdade e a justiça imparcial do que com misericórdia.
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
