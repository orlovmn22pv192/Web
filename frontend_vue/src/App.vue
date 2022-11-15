<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>

      <main class="container">
        <router-view/>
      </main>

    </div>
    
    
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
export default {
  components: {Footer, Header}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #111618;
}
.wrapper {
    min-height: 100vh;
    padding-bottom: 75px;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}
main {
    padding-top: 30px;
    font-family: Industry,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
    
}
</style>
