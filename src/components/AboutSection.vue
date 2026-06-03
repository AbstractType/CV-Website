<script setup lang="ts">
import { MapPin } from '@lucide/vue';
import { cv } from '../data/cv';
</script>

<template>
  <section id="about" class="py-24 sm:py-32 bg-white">
    <div class="mx-auto max-w-3xl px-6">
      <p
        v-reveal
        class="text-sm font-semibold tracking-widest text-brand-600 uppercase"
      >
        About
      </p>
      <h2
        v-reveal="{ delay: 80 }"
        class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
      >
        A little about me
      </h2>
      <p
        v-reveal="{ delay: 160 }"
        class="mt-6 text-lg leading-relaxed text-slate-600"
      >
        {{ cv.about }}
      </p>
      <p
        v-reveal="{ delay: 220 }"
        class="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500"
      >
        <span class="inline-flex items-center gap-2">
          <MapPin :size="16" aria-hidden="true" />
          {{ cv.location }}
        </span>
        <span v-if="cv.languages?.length" aria-hidden="true">·</span>
        <span v-if="cv.languages?.length">
          {{ cv.languages.join(', ') }}
        </span>
      </p>
    </div>
  </section>
</template>
