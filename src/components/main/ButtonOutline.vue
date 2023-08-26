<template>
  <div>
    <button type="button" class="btn" :class="typeButtonModified">
      {{ textButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonOutline",
  data() {
    return {
      typeButtonModified: "",
    };
  },
  created() {
    this.typeButtonModified = `btn-outline-${this.typeButton}`;
  },
  props: {
    textButton: String,
    typeButton: String,
  },
};
</script>
