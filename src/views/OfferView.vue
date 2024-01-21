<template>
   <div id="container" v-if="offer">
      <div id="header-filler"></div>
      <section
         id="hero"
         :style="{
            background: ` linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4)), url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }"
      >
         <h2 id="hero-heading">{{ offer.title }}</h2>
      </section>

      <section id="offer-details">
         <h2 id="offer-heading">{{ offer.title }}</h2>
         <p id="offer-description">{{ offer.description }}</p>
         <h2 id="services-heading">Leistungen</h2>
         <ul id="services">
            <li v-for="service of offer.services">{{ service }}</li>
         </ul>
         <Button to="/#contact">Kontakt aufnehmen</Button>
      </section>
   </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import { getOffer } from "@/services/offer-service";
import { useRoute } from "vue-router";

let offerSlug = useRoute().params.slug;
let offer = typeof offerSlug === "string" ? getOffer(offerSlug) : undefined;
let imgUrl = `/src/assets/imgs/${offer?.slug}.jpg`;
</script>

<style scoped lang="scss">
#header-filler {
   height: 68px;
}

#container {
   background-color: $mint;
}

#hero-heading {
   font-size: 30px;
   text-align: center;
   font-weight: bold;
}

#hero {
   padding: 150px 0;
}

#offer-details {
   padding: 40px 20px;
}

#offer-heading {
   font-size: 30px;
   font-weight: bold;
   color: $indigo;
   margin-bottom: 10px;
}

#offer-description {
   line-height: 24px;
   color: $indigo;
   margin-bottom: 20px;
}

#services {
   list-style: inside;
   list-style-position: outside;
   margin-bottom: 20px;
   margin-left: 20px;
}

#services-heading {
   color: $indigo;
   font-weight: bold;
   font-size: 24px;
}

#services > li {
   color: $indigo;
}

@media only screen and (min-width: 1200px) {
   #offer-details {
      padding: 40px 15%;
   }
}
</style>
