<template>
  <v-card>
    <v-img
      :src="require('@/assets/neuroticism.jpg')"
      height="200px"
      lazy
    >
      <v-card-title
        class="image-title"
        v-html="$t('neuroticism.title')"
      />
    </v-img>
    <v-card-text>
      <p>
        O neuroticismo refere-se à tendência de experimentar sentimentos negativos.
      </p>
      <p>
        Freud originalmente usou o termo neurose para descrever uma condição marcada pelo sofrimento mental, sofrimento emocional e uma incapacidade de lidar efetivamente com as demandas normais da vida.
      </p>
      <p>
        Ele sugeriu que todos mostre alguns sinais de neurose, mas que diferimos em nosso grau de sofrimento e nossos sintomas específicos de aflição.
      </p>
      <p>
        Hoje o neuroticismo refere-se à tendência de experimentar sentimentos negativos.
      </p>
      <p>
        Aqueles que marcam alto sobre o neuroticismo podem experimentar principalmente um sentimento negativo específico, como ansiedade, raiva ou depressão, mas provavelmente experimentarão várias dessas emoções.
      </p>
      <blockquote class="blockquote">
        <v-icon>{{ mdiFormatQuoteOpen }}</v-icon>
        O neuroticismo refere-se à tendência de experimentar sentimentos negativos.
        <v-icon>{{ mdiFormatQuoteClose }}</v-icon>
      </blockquote>
      <p>
        As pessoas altas no neuroticismo são emocionalmente reativas.
      </p>
      <p>
        Eles respondem emocionalmente a eventos que não afetam a maioria das pessoas, e suas reações tendem a ser mais intensas do que o normal.
      </p>
      <p>
        Eles são mais propensos a interpretar situações comuns como ameaçadoras e pequenas frustrações como irremediavelmente difíceis.
      </p>
      <p>
        Suas reações emocionais negativas tendem a persistir por períodos extraordinariamente longos de tempo, o que significa que eles muitas vezes estão de mau humor.
      </p>
      <p>
        Esses problemas em regulamentação emocional podem diminuir a capacidade de uma neurótica de pensar claramente, tomar decisões e lidar efetivamente com o estresse.
      </p>

      <div class="title">
        Ansiedade
      </div>
      <p>
        O sistema "luta ou vôo" do cérebro de indivíduos ansiosos é facilmente e muitas vezes envolvido.
        Portanto, as pessoas que são altas em ansiedade muitas vezes sentem que algo perigoso está prestes a acontecer.
        Eles podem ter medo de situações específicas ou ser apenas com medo.
        Eles se sentem tensos, nervosos e nervosos.As pessoas baixas em ansiedade são geralmente calmas e destemidas.
      </p>

      <div class="title">
        Raiva
      </div>
      <p>
        As pessoas que pontuam com raiva se sentem enfurecidas quando as coisas não seguem.
        Eles são sensíveis sobre serem tratados de forma justa e se sentem ressentidos e amargos quando sentem que estão sendo enganados.
        Esta escala mede a tendência de se sentir irritado;se a pessoa expressa ou não aborrecimento e hostilidade depende do nível do indivíduo no neuroticismo.
        Artilheiros baixos não ficam com raiva frequentemente ou facilmente.
      </p>

      <div class="title">
        Depressão
      </div>
      <p>
        Essa escala mede a tendência de se sentir triste, desencorajada e desencorajada.
        Os maiores marcadores não têm energia e têm dificuldade em iniciar atividades.
        Artilheiros baixos tendem a ficar livres desses sentimentos depressivos.
      </p>

      <div class="title">
        Autoconsciência
      </div>
      <p>
        Indivíduos autoconscientes são sensíveis sobre o que os outros pensam deles.
        Sua preocupação com a rejeição e o ridículo faz com que eles se sintam tímidos e desconfortáveis abundam os outros.
        Eles são facilmente envergonhados e muitas vezes se sentem envergonhados.
        Seus medos que os outros criticarão ou tirarem sarro deles são exagerados e irrealistas, mas sua constrangimento e desconforto podem fazer esses medos uma profecia auto-realizável.
        Artilheiros baixos, em contraste, não sofrem com a impressão equivocada de que todos estão assistindo e a julgando.
        Eles não se sentem nervosos em situações sociais.
      </p>

      <div class="title">
        Imoderação
      </div>
      <p>
        Indivíduos imoderados sentem grandes desejos e pedem que tenham dificuldade em resistir.
        Eles tendem a ser orientados para prazeres e recompensas de curto prazo, em vez de conseqüências de longo prazo.
        Artilheiros baixos não experimentam desejos fortes e irresistíveis e, consequentemente, não se vêem tentados a superindumular.
      </p>

      <div class="title">
        Vulnerabilidade
      </div>
      <p>
        Altos marcadores na vulnerabilidade experimentam pânico, confusão e desamparo quando sob pressão ou estresse.
        Ponteiros baixos se sentem mais prontos, confiante e claro quando estressado.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js'

export default {
  name: 'Neuroticism',
  data: () => ({
    mdiFormatQuoteClose,
    mdiFormatQuoteOpen
  }),
  head () {
    return {
      title: this.$t('neuroticism.seo.title'),
      meta: [
        { hid: 'title', name: 'title', content: this.$t('neuroticism.seo.title') },
        { hid: 'description', name: 'description', content: this.$t('neuroticism.seo.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') },
        // Open Graph
        { hid: 'og:title', name: 'og:title', content: this.$t('neuroticism.seo.title') },
        { hid: 'og:description', name: 'og:description', content: this.$t('neuroticism.seo.description') },
        { hid: 'twitter:title', name: 'twitter:title', content: this.$t('neuroticism.seo.title') },
        { hid: 'twitter:description', name: 'twitter:description', content: this.$t('neuroticism.seo.description') }
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
