<template>
  <div class="container">
    <div class="search-container">
      <input
        :placeholder="name"
        :name="name"
        :id="name"
        v-model="searchTerm"
        @focus="drawer = true"
        @blur="drawer = false"
      />
      <label :for="name">{{ name }}</label>
    </div>
    <ul v-show="drawer === true">
      <li v-for="opt in filteredList" :key="opt.id" @mousedown="selectItem(opt.item)">
        {{ opt.item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String
  },
  data() {
    return {
      drawer: false,
      searchTerm: '',
      options: [
        { id: 1, item: 'PR' },
        { id: 3, item: 'SP' },
        { id: 4, item: 'RS' },
        { id: 5, item: 'SC' },
        { id: 6, item: 'MG' },
        { id: 7, item: 'RJ' },
        { id: 8, item: 'ES' },
        { id: 9, item: 'MT' }
      ]
    }
  },

  methods: {
    selectItem(item: string) {
      this.searchTerm = item.toUpperCase()
      this.drawer = false
    }
  },

  computed: {
    filteredList() {
      return this.options.filter((option) => {
        return option.item.toUpperCase().includes(this.searchTerm.toUpperCase())
      })
    }
  }
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
  width: 100%;
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

ul {
  width: 100%;
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
  position: absolute;
  font-size: 2rem;
  background-color: var(--background-color);
  z-index: 1;
}

li {
  width: 3rem;
  border-bottom: 2px solid var(--primary-color);
}
</style>
