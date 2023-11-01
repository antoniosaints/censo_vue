<script setup>
import { defineProps } from "vue";
import ButtonLink from "@/components/main/routerButton.vue";

defineProps({
  links: Array,
});
</script>

<template>
  <div>
    <ul id="dropdown-authentication" class="hidden py-2 space-y-2">
      <li v-for="link in links" :key="link.to">
        <ButtonLink :to="link.to" :label="link.label" />
      </li>
    </ul>
  </div>
</template>
