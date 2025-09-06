<!-- .vitepress/theme/components/MK.vue -->
<template>
  <span class="marker-evy">
    <slot />
  </span>
</template>

<script setup>
// 无需额外的JavaScript逻辑
</script>

<style scoped>
.marker-evy {
  white-space: nowrap;
  position: relative;
  display: inline;
  font-weight: 500;
  color: inherit;
}

.marker-evy:after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 66%;
  left: 0em;
  right: 0em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgba(79, 192, 141, 0.5);
}

.marker-evy:hover:after {
  top: 0%;
}
</style>
