<template>
  <v-card>
    <v-img
      :src="require('@/assets/extraversion.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('extraversion.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        A extroversão é marcada pelo envolvimento pronunciado com o mundo externo.
      </p>
      <p>
        Extraves gostam de estar com as pessoas, estão cheios de energia e muitas vezes experimentam emoções positivas.
        Eles tendem a ser entusiasmados, orientados para a ação, que são susceptíveis de dizer "sim!"ou "Vamos!"para oportunidades de excitação.
        Em grupos eles gostam de falar, afirmar-se e chamar a atenção para si.
      </p>
      <blockquote class="blockquote">
        <v-icon>{{ mdiFormatQuoteOpen }}</v-icon>
        A extroversão é marcada pelo envolvimento pronunciado com o mundo externo.
        <v-icon>{{ mdiFormatQuoteClose }}</v-icon>
      </blockquote>
      <p>
        Introvertidos não têm exuberância, energia e níveis de atividade de extrovertidos.
        Eles tendem a ser quieto, discreto, deliberado e desengatado do mundo social.
        Sua falta de envolvimento social não deve ser interpretada como timidez ou depressão;O introvertido simplesmente precisa de menos estimulação do que um extravito e prefere ficar sozinho.
        A independência e a reserva do introvertido às vezes são confundidas como se hostil ou arrogância.
        Na realidade, um introvertido que pontua na dimensão da extroversão não procurará os outros, mas será bastante agradável quando abordado.
      </p>

      <div class="title">
        Simpatia
      </div>
      <p>
        Pessoas amigáveis genuinamente como outras pessoas e demonstram abertamente sentimentos positivos em relação aos outros.
        Eles fazem amigos rapidamente e é fácil para eles formar relacionamentos íntimos próximos.
        Baixos marcadores na simpatia não são necessariamente frios e hostis, mas eles não estendem a mão para os outros e são percebidos como distantes e reservados.
      </p>

      <div class="title">
        gregariousness
      </div>
      <p>
        As pessoas gregárias encontram a empresa de outros agradavelmente estimulando e recompensando.
        Eles gostam da excitação de multidões.Baixos marcadores tendem a se sentir sobrecarregados e, portanto, evitam ativamente, grandes multidões.
        Eles não necessariamente não gostam de estar com as pessoas às vezes, mas sua necessidade de privacidade e tempo para si é muito maior do que para indivíduos que pontuam no alto desta escala.
      </p>

      <div class="title">
        Assertividade
      </div>
      <p>
        Assertividade de maior pontuações gostam de falar, assumir conta e direcionar as atividades dos outros.
        Eles tendem a ser líderes em grupos.
        Baixos marcadores tendem a não falar muito e deixar os outros controlar as atividades dos grupos.
      </p>

      <div class="title">
        Nível de atividade
      </div>
      <p>
        Indivíduos ativos levam vidas rápidas e ocupadas.
        Eles se movem de forma rápida, energética e vigorosamente, e estão envolvidas em muitas atividades.
        As pessoas que marcam baixo nesta escala seguem um ritmo mais lento e descontraído e descontraído.
      </p>

      <div class="title">
        Busca de excitação
      </div>
      <p>
        Os maiores pontuadores nesta escala são facilmente entediados sem altos níveis de estimulação.
        Eles amam luzes brilhantes e agitação.
        Eles são susceptíveis de assumir riscos e buscar emoções.
        Artilheiros baixos são sobrecarregados por ruído e comoção e são adversos à busca de emoções.
      </p>

      <div class="title">
        Alegria
      </div>
      <p>
        Essa escala mede humor e sentimentos positivos, não emoções negativas (que fazem parte do domínio do neuroticismo).
        As pessoas que pontuam altas nesta escala tipicamente experimentam uma série de sentimentos positivos, incluindo felicidade, entusiasmo, otimismo e alegria.
        Artilheiros baixos não são tão propensos a espíritos tão enérgicos e altos.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Extraversion',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('extraversion.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('extraversion.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('extraversion.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('extraversion.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('extraversion.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('extraversion.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('extraversion.seo.description') }
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
