<template>
  <div class="bg-white dark:bg-dark min-h-screen">
    <Head>
      <Title>The Largest Elixir Conference in Africa</Title>
    </Head>
    <div :class="['min-h-screen bg-no-repeat w-full', bgClass]">
      <top-nav :default-layout="defaultLayout" />
      <slot />
      <footer-nav />
    </div>
  </div>
</template>
<script setup>
import TopNav from './components/TopNav'
import FooterNav from './components/FooterNav'

const bg = 'bg-right-top bg-background'
const bg1 = 'bg-background-1'

const bgClass = ref(bg)
const defaultLayout = ref(true)
const route = useRoute()

watchEffect(() => {
  bgClass.value = route.name === 'index' ? bg : bg1
  defaultLayout.value = route.name === 'index'
})

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})

</script>

<style>
.bg-background {
  background: url(/images/banner_img.png);
  background-size: 50vw auto;
}

.bg-background-1 {
  background: url(/images/about-banner.jpeg) 0% 0%;
  background-size: 100% 350px;
}
@media screen and (max-width: 600px) {
  .bg-background {
    background-size: 60vw auto;
  }
  .bg-background-1 {
    background-size: 100% 220px;
  }
}
</style>
