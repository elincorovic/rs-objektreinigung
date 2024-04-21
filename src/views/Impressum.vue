<template>
   <div id="container">
      <h1 class="bold">Impressum Refko Corovic</h1>
      <p class="bold">Refko Corovic</p>
      <p>Vogelsangstr. 63</p>
      <p>70197 Stuttgart</p>
      <p>Deutschland</p>
      <br />
      <p class="bold">Kontakt</p>
      <p>Telefon: +49 172 8410050</p>
      <p>E-Mail: refko19.rc@gmail.com</p>
   </div>
</template>

<style scoped lang="scss">
#container {
   background-color: $mint;
   padding: calc(30px + 68px) 20px 50px 20px;
}

* {
   color: $indigo;
}

h1 {
   font-size: 39px;
   padding-bottom: 20px;
}

@media only screen and (min-width: 1200px) {
   #container {
      padding: calc(30px + 68px) 15% 50px 15%;
      height: 60vh;
   }
}
</style>
