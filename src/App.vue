<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { getOffers } from "./services/offer-service";
import { ref } from "vue";

let offers = getOffers();
let menuOpen = ref(false);
</script>

<template>
   <header>
      <div id="menu-bar">
         <router-link to="/"><div id="logo">RS</div></router-link>
         <img
            v-if="!menuOpen"
            id="menu-burger"
            src="/icons/menu-burger.png"
            alt="menu"
            @click="() => (menuOpen = true)"
         />
         <img
            v-if="menuOpen"
            id="menu-close"
            src="/icons/menu-close.png"
            alt="menu"
            @click="() => (menuOpen = false)"
         />
         <ul id="desktop-links">
            <router-link to="/"><li>Home</li></router-link>
            <router-link to="/offers"><li>Unser Angebot</li></router-link>
            <router-link to="/#contact"><li>Kontakt</li></router-link>
         </ul>
      </div>
      <div v-if="menuOpen" id="mobile-links">
         <router-link to="/" @click="menuOpen = false"
            ><div>Home</div></router-link
         >
         <router-link to="/offers" @click="menuOpen = false"
            ><div>Unser Angebot</div></router-link
         >
         <router-link to="/#contact" @click="menuOpen = false"
            ><div>Kontakt</div></router-link
         >
      </div>
   </header>

   <div v-if="menuOpen" id="menu-overlay"></div>

   <RouterView />

   <footer>
      <div id="footer-top">
         <div>
            <h3>Navigation</h3>
            <ul>
               <router-link to="/"><li>Home</li></router-link>
               <router-link to="/offers"><li>Unser Angebot</li></router-link>
               <router-link to="/#contact"><li>Kontakt</li></router-link>
            </ul>
         </div>

         <div>
            <h3>Unser Angebot</h3>
            <ul>
               <router-link
                  v-for="offer in offers"
                  :key="offer.slug"
                  :to="`/offer/${offer.slug}`"
                  ><li>{{ offer.title }}</li></router-link
               >
            </ul>
         </div>

         <div>
            <h3>Kontakt</h3>
            <p>
               RS Objektreinigung Stuttgart <br />
               Vogelsangstr. 63 <br />
               70197 Stuttgart
            </p>
            <p>
               Ansprechpartner: <br />
               Refko Corovic
            </p>
            <div class="contact-info">
               <img src="/icons/call.png" alt="phone" />
               <div>0173/1881447</div>
            </div>
            <div class="contact-info">
               <img src="/icons/mail.png" alt="phone" />
               <div>refko19.rc@gmail.com</div>
            </div>
         </div>
      </div>
      <div id="footer-bottom">
         <router-link to="/impressum" class="footer-bottom-link"
            >Impressum</router-link
         >
         <router-link to="/datenschutz" class="footer-bottom-link"
            >Datenschutz</router-link
         >
      </div>
   </footer>
</template>

<style scoped lang="scss">
header {
   z-index: 2;
   position: fixed;
   box-sizing: border-box;
   width: 100%;
}

#menu-overlay {
   z-index: 1;
   position: fixed;
   height: 100vh;
   width: 100vw;
   top: 0;
   background-color: rgb(0, 0, 0, 0.5);
}

#menu-bar {
   width: 100%;
   height: 68px;
   background-color: $indigo;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;
}

#logo {
   font-size: 36px;
   font-weight: bold;
}

#menu-burger,
#menu-close {
   width: 33px;
   cursor: pointer;
}

#mobile-links {
   background-color: $indigo;
   padding: 20px 20px;
   list-style: none;
}

#mobile-links > a > div {
   font-size: 24px;
   margin-bottom: 10px;
}

#desktop-links {
   display: none;
}

.contact-info > img {
   width: 20px;
   margin-right: 10px;
}

.contact-info {
   display: flex;
   align-items: center;
}

footer {
   background-color: $indigo;
   padding: 20px;
}

#footer-top {
   padding-bottom: 20px;
}

#footer-top > div > h3 {
   margin-top: 20px;
   margin-bottom: 10px;
   font-size: 24px;
}

#footer-top > div:first-child > h3 {
   margin-top: 0;
}

#footer-top > div > ul {
   list-style: none;
}
#footer-top > div > ul > a {
   text-decoration: none;
}

#footer-top > div > p {
   line-height: 22px;
   margin-bottom: 20px;
}

#footer-bottom {
   display: flex;
   justify-content: center;
   border-top: 2px solid $mint;
}

.footer-bottom-link {
   margin: 20px 30px 0 30px;
}

.contact-info > div {
   line-height: 22px;
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 1024px) {
   #mobile-links {
      display: none;
   }

   #menu-burger,
   #menu-close {
      display: none;
   }

   #desktop-links {
      display: flex;
      list-style: none;
      gap: 40px;
   }

   #footer-top {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
   }

   #footer-top > div:first-child > h3 {
      margin-top: 20px;
   }
}

@media only screen and (min-width: 1200px) {
   #menu-bar {
      padding: 0 15%;
   }

   footer {
      padding: 20px 15%;
   }
}
</style>
