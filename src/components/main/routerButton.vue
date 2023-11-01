<template>
  <div>
    <router-link
      :to="to"
      class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >{{ label }}</router-link
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  to: String,
  label: String,
});
</script>
