<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/">Utility Tools</router-link>
    </div>
    <div class="navbar-menu">
      <div class="dropdown">
        <button class="dropdown-button">Features</button>
        <div class="dropdown-content">
          <router-link to="/base64-image-converter">Base64 Image Converter</router-link>
          <router-link to="/text-encoder-decoder">Text Encoder/Decoder</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComponent'
};
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  width: 100vw;
}

.navbar-brand {
  font-size: 20px;
}

.navbar-brand a {
  color: white;
  text-decoration: none;
}

.navbar-menu {
  position: relative;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #333;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.dropdown-button:focus {
  outline: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>