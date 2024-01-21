<template>
   <div id="container">
      <h2>Unser Angebot</h2>
      <div id="offers-container">
         <Offer
            v-for="(offer, index) in offers"
            :slug="offer.slug"
            :title="offer.title"
            :short-description="offer.shortDescription"
            :as-link="true"
            :class="{
               'offer-7': index ? index == 7 : '',
               'offer-8': index ? index == 8 : '',
            }"
         >
         </Offer>
      </div>
   </div>
</template>

<script setup lang="ts">
import Offer from "@/components/Offer.vue";
import { getOffers } from "@/services/offer-service";

let offers = getOffers();
</script>

<style scoped lang="scss">
#container {
   background-color: $mint;
   padding: calc(30px + 68px) 50px 50px 50px;
}

h2 {
   font-weight: bold;
   color: $indigo;
   text-align: center;
   font-size: 30px;
   margin-bottom: 30px;
}

@media only screen and (min-width: 768px) {
   #offers-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      grid-auto-rows: 1fr;
   }
}

@media only screen and (min-width: 1200px) {
   #container {
      padding: calc(30px + 68px) 15% 50px 15%;
   }
}

@media only screen and (min-width: 1600px) {
   #offers-container {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
   }
}
</style>
