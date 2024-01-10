<template>
  <div class="container">
    <div class="search-container">
      <input
        :placeholder="name"
        :name="name"
        :id="name"
        v-model="searchTerm"
        @blur="handleBlur"
        @focus="drawer = true"
        @keydown.up.prevent="handleArrowUp"
        @keydown.down.prevent="handleArrowDown"
        @keydown.enter.prevent="handleEnter"
      />
      <label :for="name">{{ name }}</label>
    </div>
    <ul v-show="drawer === true">
      <li
        v-for="(opt, index) in filteredList"
        :key="opt.id"
        @mousedown="selectItem(opt.item)"
        @mouseenter="highlightedIndex = index"
        :class="{ highlighted: index === highlightedIndex }"
      >
        {{ opt.item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    modelValue: String,
    options: {
      type: Array<any>,
      default: () => [] as any[]
    }
  },
  data() {
    return {
      drawer: false,
      searchTerm: '',
      highlightedIndex: -1
    }
  },

  methods: {
    handleBlur() {
      this.drawer = false
    },
    handleArrowUp() {
      if (this.highlightedIndex > 0) this.highlightedIndex--
    },
    handleArrowDown() {
      if (this.highlightedIndex < this.filteredList.length - 1) this.highlightedIndex++
    },
    handleEnter() {
      if (this.highlightedIndex !== -1) {
        this.selectItem(this.filteredList[this.highlightedIndex].item)
        this.highlightedIndex = -1
      }
    },
    selectItem(item: string) {
      this.searchTerm = item.length > 2 ? item : item.toUpperCase()
      this.drawer = false
      this.$emit('update:modelValue', this.searchTerm)
    }
  },

  computed: {
    filteredList() {
      return this.options.filter((option) => {
        return option.item.toUpperCase().includes(this.searchTerm.toUpperCase())
      })
    }
  },

  watch: {
    modelValue(newVal: any) {
      this.searchTerm = newVal
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
  width: fit-content;
  border-bottom: 2px solid var(--primary-color);

  &.highlighted {
    transition: transform 0.3s;
    transform: scale(1.5);
  }
}
</style>
