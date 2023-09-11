<template>
  <div>
    <label
      for="server"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Porta</label
    >
    <input
      v-model="api.porta"
      type="number"
      required
      placeholder="Porta"
      id="server"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  labelProp: String,
  valueProp: String,
});
</script>
