<script setup lang="ts">
import { cv } from '../data/cv';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

// Initials for the brand mark.
const initials = cv.name
  .split(' ')
  .map((part) => part[0])
  .join('')
  .slice(0, 2)
  .toUpperCase();
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60"
  >
    <nav
      class="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between gap-6"
      aria-label="Primary"
    >
      <a
        href="#top"
        class="flex items-center gap-2 font-bold text-slate-900 hover:text-brand-600 transition-colors"
      >
        <span
          class="inline-grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white text-sm font-extrabold tracking-tight shadow-sm"
        >{{ initials }}</span>
        <span class="hidden sm:inline text-sm">{{ cv.name }}</span>
      </a>
      <ul class="flex items-center gap-1 sm:gap-2 overflow-x-auto">
        <li v-for="link in links" :key="link.href" class="shrink-0">
          <a
            :href="link.href"
            class="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
