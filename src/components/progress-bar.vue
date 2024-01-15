<template>
  <div v-if="show" class="container">
    <div class="overlay"></div>
    <div class="progress-bar">
      <div class="message">{{ text }}</div>
      <div class="bar" :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: () => {
        'Loading...'
      }
    },
    show: {
      type: Boolean,
      default: () => {
        false
      }
    },
    progress: {
      type: Number,
      default: () => {
        68
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  justify-items: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 499;
}

.progress-bar {
  width: 90%;
  top: 50%;
  font-size: 2rem;
  display: grid;
  gap: 2rem;
  position: fixed;
  z-index: 500;
  margin: auto;
  padding: 2rem;
  animation: scale-animation 0.5s forwards;
}

.bar {
  animation: load 2s normal forwards;
  border-radius: 10rem;
  background: var(--primary-color);
  height: 2.5rem;
}

.message {
  font-size: 2rem;
  font-weight: 700;
}

@keyframes load {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes scale-animation {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
