<template>
   <router-link :to="props.to ?? ''">
      <div id="button">
         <slot />
      </div>
   </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{
   to?: string;
}>();
</script>

<style scoped lang="scss">
#button {
   width: fit-content;
   padding: 12px 18px;
   background-color: $moontone;
   border-radius: 4px;
   box-shadow: 2px 2px 7px rgb(0, 0, 0, 0.5);
}
</style>
