<template>
  <div class="container">
    <input type="file" @change="handleFileChange" />
    <textarea v-model="inputBase64" rows="10" cols="50" placeholder="Paste your Base64 code here"></textarea>
    <button @click="testBase64">Test Base64</button>
    <div v-if="base64Data">
      <button @click="copyToClipboard">Copy to Clipboard</button>
      <h2>Preview:</h2>
      <img :src="base64Data" alt="Base64 Image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base64Data: '',
      inputBase64: ''
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.base64Data = e.target.result;
          this.inputBase64 = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    testBase64() {
      if (this.inputBase64) {
        if (this.inputBase64.startsWith('data:image/')) {
          this.base64Data = this.inputBase64;
        } else {
          this.base64Data = 'data:image/png;base64,' + this.inputBase64;
        }
      } else {
        alert('Please paste a valid Base64 image code');
      }
    },
    copyToClipboard() {
      navigator.clipboard.writeText(this.base64Data).then(() => {
        alert('Base64 data copied to clipboard!');
      }, () => {
        alert('Failed to copy!');
      });
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

input[type='file'],
textarea,
button {
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
}

textarea {
  height: 100px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>