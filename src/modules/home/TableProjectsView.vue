<template>
  <main>
    <table-project />
  </main>
</template>

<script lang="ts">
import TableProject from '@/components/table-project.component.vue'

export default {
  components: {
    TableProject: TableProject
  }
}
</script>

<style scoped>
main {
  display: grid;
  justify-items: center;

  padding: 1.5rem;
  gap: 1.5rem;
}
</style>
