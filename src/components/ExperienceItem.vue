<script setup lang="ts">
import type { Job } from '../types/cv';

defineProps<{ job: Job }>();
</script>

<template>
  <article
    v-reveal
    class="relative pl-8 pb-12 last:pb-0 group"
  >
    <!-- Timeline rail + dot. -->
    <span
      aria-hidden="true"
      class="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bottom-6"
    />
    <span
      aria-hidden="true"
      class="absolute left-0 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-white border-2 border-brand-500 shadow"
    />

    <div
      class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
    >
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h3 class="text-lg font-semibold text-slate-900">
          <span>{{ job.role }}</span>
          <span class="text-slate-500 font-normal mx-1.5">·</span>
          <span class="text-brand-700">{{ job.company }}</span>
        </h3>
        <p class="text-sm text-slate-500 tabular-nums">
          {{ job.start }} – {{ job.end }}
        </p>
      </div>
      <p v-if="job.location" class="mt-1 text-sm text-slate-500">
        {{ job.location }}
      </p>
      <ul v-if="job.bullets.length" class="mt-4 space-y-2 text-slate-700">
        <li
          v-for="(bullet, i) in job.bullets"
          :key="i"
          class="relative pl-5 leading-relaxed"
        >
          <span
            aria-hidden="true"
            class="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-brand-500"
          />
          {{ bullet }}
        </li>
      </ul>
      <ul
        v-if="job.tech && job.tech.length"
        class="mt-5 flex flex-wrap gap-1.5"
      >
        <li
          v-for="t in job.tech"
          :key="t"
          class="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700 border border-slate-200"
        >
          {{ t }}
        </li>
      </ul>
    </div>
  </article>
</template>
