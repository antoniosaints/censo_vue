<template>
  <div>
    <div class="row text-center">
      <div class="col-md-12 h2">Teste</div>
      <router-link to="/">Buscar</router-link>
      <router-link to="/dash">Dash</router-link>
    </div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
