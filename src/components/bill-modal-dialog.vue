<template>
  <div class="container">
    <div v-if="show" class="overlay"></div>
    <div v-if="show" class="modalDialog">
      <span>{{ text }}</span>
      <div class="actions">
        <actionButton @click="close" name="Sim" />
        <actionButton @click="callback" name="Não" :route="route" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ButtonComponent from './button-component.vue'

export default {
  components: { actionButton: ButtonComponent },
  props: {
    text: {
      type: String,
      default: () => 'Tem certeza que deseja fazer isso?'
    },
    show: {
      type: Boolean,
      default: () => false,
      required: true
    },
    route: {
      type: String
    }
  },

  methods: {
    callback() {
      this.$emit('action')
    },
    close() {
      this.$emit('close')
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

.modalDialog {
  width: 90%;
  top: 50%;
  font-size: 2rem;
  display: grid;
  gap: 2rem;
  position: fixed;
  z-index: 500;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--gray);
  animation: zoom-in-zoom-out 0.5s forwards;
  pointer-events: auto;
}

.actions {
  display: flex;
  gap: 2rem;

  button {
    font-size: 1.5rem;
    padding: 1rem;
  }
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
