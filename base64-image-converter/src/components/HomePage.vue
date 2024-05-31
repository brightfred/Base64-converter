<template>
    <div class="container">
      <h1>Welcome to the Utility Tools</h1>
      <nav>
        <router-link to="/base64-image-converter">Base64 Image Converter</router-link>
        <router-link to="/text-encoder-decoder">Text Encoder/Decoder</router-link>
      </nav>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  nav a {
    margin: 10px 0;
    text-decoration: none;
    color: #42b983;
    font-size: 18px;
  }
  </style>