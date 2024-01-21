<template>
   <RouterLink id="offer-link" :to="props.asLink ? `/offer/${props.slug}` : ''">
      <div id="offer-container">
         <img :src="imgSrc" :alt="props.title" />
         <div class="text-box">
            <h3>{{ props.title }}</h3>
            <p class="short-description">{{ props.shortDescription }}</p>
         </div>
      </div>
   </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
   slug: string;
   title: string;
   shortDescription: string;
   asLink?: boolean;
}>();

const imgSrc = "/rs-objektreinigung/imgs/" + props.slug + ".jpg";
</script>

<style scoped lang="scss">
#offer-link {
   width: 100%;
   margin-bottom: 30px;
   background-color: $mint;
}

#offer-container {
   width: 100%;
   border: 2px solid $indigo;
   height: 100%;
   min-height: 0;
}

img {
   display: block;
   margin: 0;
   width: 100%;
   height: 250px;
   object-fit: cover;
}

.text-box {
   padding-top: 10px;
   background-color: $mint;
}

.short-description {
   color: $indigo;
   text-align: center;
   font-size: 14px;
   padding: 10px;
}

h3 {
   color: $indigo;
   text-align: center;
   font-weight: bold;
}
</style>
