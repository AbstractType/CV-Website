<script setup lang="ts">
import { GraduationCap } from '@lucide/vue';
import { cv } from '../data/cv';
</script>

<template>
  <section id="education" class="py-24 sm:py-32 bg-slate-50">
    <div class="mx-auto max-w-3xl px-6">
      <p
        v-reveal
        class="text-sm font-semibold tracking-widest text-brand-600 uppercase"
      >
        Education
      </p>
      <h2
        v-reveal="{ delay: 80 }"
        class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
      >
        Where I studied
      </h2>

      <ul class="mt-10 space-y-4">
        <li
          v-for="edu in cv.education"
          :key="`${edu.school}-${edu.start}`"
          v-reveal
          class="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <span
            aria-hidden="true"
            class="grid place-items-center h-10 w-10 rounded-lg bg-brand-50 text-brand-600 shrink-0"
          >
            <GraduationCap :size="20" />
          </span>
          <div class="flex-1">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="font-semibold text-slate-900">{{ edu.degree }}</h3>
              <p class="text-sm text-slate-500 tabular-nums">
                {{ edu.start }} – {{ edu.end }}
              </p>
            </div>
            <p class="text-sm text-slate-600 mt-0.5">{{ edu.school }}</p>
            <p v-if="edu.details" class="text-sm text-slate-500 mt-2">
              {{ edu.details }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
