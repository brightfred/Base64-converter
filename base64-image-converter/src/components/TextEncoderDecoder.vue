<template>
    <div class="container">
      <h2>Text Encoder/Decoder</h2>
      <textarea v-model="textInput" rows="4" cols="50" placeholder="Enter text here"></textarea>
      <button @click="encodeText">Encode to Base64</button>
      <button @click="decodeText">Decode from Base64</button>
      <textarea v-model="outputText" rows="4" cols="50" readonly></textarea>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        textInput: '',
        outputText: ''
      };
    },
    methods: {
      encodeText() {
        this.outputText = btoa(this.textInput);
      },
      decodeText() {
        try {
          this.outputText = atob(this.textInput);
        } catch (e) {
          alert('Invalid Base64 string');
        }
      }
    }
  };
  </script>
  
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
  
  textarea {
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;
  }
  
  button {
    margin-bottom: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  