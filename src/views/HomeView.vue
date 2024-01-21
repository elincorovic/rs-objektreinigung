<script lang="ts" setup>
import Button from "@/components/Button.vue";
import Offer from "@/components/Offer.vue";
import { getOffers } from "@/services/offer-service";

let offers = getOffers();
</script>

<template>
   <section id="hero">
      <h1 id="hero-name-top">RS</h1>
      <h2 id="hero-name-bottom">Objektreinigung</h2>
      <div id="hero-slogan">
         <p>
            Strahlende Sauberkeit, <br />
            verlässlicher Service
         </p>
         <div id="hero-line"></div>
         <p>Ihr Partner für makellose Räumlichkeiten in Stuttgart!</p>
      </div>
      <div id="hero-button">
         <Button to="/#contact">Kontakt aufnehmen</Button>
      </div>
   </section>

   <section id="welcome">
      <p id="welcome-start-text">Herzlich Willkommen bei</p>
      <p id="welcome-company-name">RS-Objektreinigung <br />in Stuttgart</p>
      <div id="welcome-line"></div>
      <p class="welcome-paragraph">
         Wir freuen uns, Sie auf unserer Webseite begrüßen zu dürfen. Als Ihre
         zuverlässige Partner für professionelle Objektreinigung stehen wir für
         strahlende Sauberkeit und erstklassigen Service.
      </p>
      <p class="welcome-paragraph">
         Ob Bürogebäude, Geschäftsräume oder Privathaushalte – wir verstehen die
         Bedeutung einer sauberen Umgebung für Ihr Wohlbefinden und den
         erfolgreichen Verlauf Ihrer Geschäfte. Unser Einsatz reicht dabei über
         die üblichen Standards hinaus, um höchsten Qualitätsansprüchen gerecht
         zu werden.
      </p>
      <p class="welcome-paragraph">Ihr RS-Objektreinigung Team</p>
   </section>

   <section id="offer">
      <h2 id="offer-title">Unser Angebot</h2>
      <div id="offers-container">
         <Offer
            v-for="i in 4"
            :slug="offers[i].slug"
            :title="offers[i].title"
            :short-description="offers[i].shortDescription"
            :as-link="true"
            :class="{ 'last-offer': i == 4 ? true : false }"
         ></Offer>
      </div>
      <div id="offers-link">
         <Button to="/offers">Zu den Angeboten</Button>
      </div>
   </section>

   <section id="contact">
      <h2 id="contact-title">Kontakt</h2>
      <div id="contact-card">
         <p>
            <span class="bold">RS Objektreinigung Stuttgart</span> <br />
            Vogelsangstr. 63 <br />70197 Stuttgart
         </p>
         <div id="contact-line"></div>
         <p>
            Ansprechpartner: <br />
            Refko Corovic
         </p>
         <p>So erreichen sie uns:</p>
         <div class="contact-info">
            <img src="/icons/call.png" alt="phone" />
            <div>0173/1881447</div>
         </div>
         <div class="contact-info">
            <img src="/icons/mail.png" alt="phone" />
            <div>refko19.rc@gmail.com</div>
         </div>
      </div>
   </section>
</template>

<style scoped lang="scss">
#hero {
   padding: 0 20px;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   background: linear-gradient(rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.1)),
      url("/imgs/office-outside.jpg");
   background-size: cover;
   background-position: center;
}

#hero-name-top {
   margin-bottom: -20px;
   color: $indigo;
   font-size: 64px;
   font-weight: 900;
}

#hero-name-bottom {
   color: $indigo;
   font-size: 36px;
   font-weight: 900;
}

#hero-slogan {
   background-color: rgba(19, 60, 85, 0.8);
   padding: 15px;
   margin-top: 10px;
}

#hero-slogan > p {
   font-size: 24px;
   line-height: 30px;
}

#hero-slogan > p:last-child {
   margin-top: -5px;
}

#hero-line {
   margin: 15px 0;
   width: 30px;
   height: 0px;
   border: 1px solid $mint;
}

#hero-button {
   margin-top: 20px;
}

#welcome {
   scroll-margin-top: 68px;
   padding: 50px 20px;
   background-color: $mint;
}

#welcome > p {
   text-align: center;
   color: $indigo;
}

.welcome-paragraph {
   line-height: 130%;
   margin: 20px 0;
}

#welcome-start-text {
   font-size: 24px;
}

#welcome-company-name {
   font-size: 30px;
   font-weight: bold;
   line-height: 36px;
}

#welcome-line {
   margin: 15px auto;
   width: 30px;
   height: 0px;
   border: 2px solid $indigo;
}

#offer {
   scroll-margin-top: 68px;
   padding: 50px 50px;
   background: linear-gradient(rgb(19, 60, 85, 0.8), rgb(19, 60, 85, 0.8)),
      url("/imgs/office-outside.jpg");
   background-position: center;
}

#offer-title {
   margin-bottom: 30px;
   font-size: 30px;
   font-weight: bold;
   text-align: center;
}

#offers-link {
   display: flex;
   justify-content: center;
}

#contact-title {
   margin-bottom: 30px;
   font-size: 30px;
   font-weight: bold;
   text-align: center;
   color: $indigo;
}

#contact {
   background-color: $mint;
   padding: 50px 20px;
}

#contact-line {
   margin-top: 5px;
   margin-bottom: 10px;
   width: 30px;
   height: 0px;
   border: 1px solid $mint;
}

#contact-card {
   background-color: rgb(19, 60, 85, 0.8);
   padding: 20px;
}

#contact-card > p,
#contact-card > p > span {
   font-size: 20px;
   line-height: 26px;
   margin-bottom: 10px;
}

.contact-info > div {
   font-size: 20px;
   line-height: 26px;
}

#contact-card > p:last-child {
   margin-bottom: 0;
}

.contact-info > img {
   width: 20px;
   margin-right: 10px;
}

.contact-info {
   display: flex;
   align-items: center;
}

@media only screen and (min-width: 768px) {
   #welcome {
      padding: 50px 150px;
   }

   #offers-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
   }

   #contact {
      padding: 50px 150px;
   }
}

@media only screen and (min-width: 1200px) {
   #hero {
      padding: 0 15%;
   }

   #welcome {
      padding: 50px 15%;
   }

   #offer {
      padding: 50px 15%;
   }

   #contact {
      padding: 50px 30%;
   }
}

@media only screen and (min-width: 1600px) {
   .last-offer {
      display: none;
   }

   #offers-container {
      grid-template-columns: 1fr 1fr 1fr;
   }
}
</style>
