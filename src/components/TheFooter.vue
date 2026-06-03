<script setup lang="ts">
import { cv } from '../data/cv';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-slate-200 bg-slate-50">
    <div
      class="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500"
    >
      <p>© {{ year }} {{ cv.name }}</p>
      <p>Built with Vue 3, Vite & Tailwind CSS.</p>
    </div>
  </footer>
</template>
