<template>
  <header>
    <RouterLink to="/"><img src="@/assets/images/logo.png" alt=""></RouterLink>

    <nav>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/capsules">Capsules</RouterLink>
      <RouterLink to="/signin">Sign in</RouterLink>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  box-sizing: border-box;
}

nav {
  display: flex;
  gap: 20px;
  padding-right: 10px;
}

img {
  width: 80px;
}

a {
  text-decoration: none;
  color: #000;
}
</style>
