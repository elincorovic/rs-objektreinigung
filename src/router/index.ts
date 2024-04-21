import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OffersView from "../views/OffersView.vue";
import OfferView from "../views/OfferView.vue";
import Impressum from "../views/Impressum.vue";
import Datenschutz from "@/views/Datenschutz.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: HomeView,
      },
      {
         path: "/offers",
         name: "offers",
         component: OffersView,
      },
      {
         path: "/offer/:slug",
         name: "offer",
         component: OfferView,
      },
      {
         path: "/impressum",
         name: "impressum",
         component: Impressum,
      },
      {
         path: "/datenschutz",
         name: "datenschutz",
         component: Datenschutz,
      },
   ],
   scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
         return {
            el: to.hash,
         };
      }
      return { top: 0 };
   },
});

export default router;
