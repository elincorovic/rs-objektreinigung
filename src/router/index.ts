import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OffersView from "../views/OffersView.vue";
import OfferView from "../views/OfferView.vue";

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
   ],
});

export default router;
