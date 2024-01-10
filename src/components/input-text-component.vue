<template>
  <div class="container">
    <input
      :placeholder="name"
      :name="name"
      :id="name"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target!.value)"
    />
    <label :for="name">{{ name }}</label>
  </div>
</template>

<script lang="ts">
export default {
  props: ['name', 'type', 'modelValue']
}
</script>

<style scoped>
.container {
  position: relative;
  padding: 1rem 0 0;
  margin-top: 1rem;
}

input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--gray);
  font-size: 1.7rem;
  color: var(--font-color);
  padding: 0.7rem 0;
  background: transparent;
  transition: border-color 0.2s;
}

input::placeholder {
  color: transparent;
}

input:placeholder-shown ~ label {
  font-size: 2rem;
  cursor: text;
  top: 2rem;
}

label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  color: var(--gray);
}

input:focus {
  border-width: 3px;
  border-image: linear-gradient(to right, var(--primary-color), var(--gray));
  border-image-slice: 1;
}

input:focus ~ label {
  position: absolute;
  top: 0;
  transition: 0.2s;
  font-size: 1.7rem;
  color: var(--primary-color);
  font-weight: 700;
}
</style>
