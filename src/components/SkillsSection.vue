<script setup lang="ts">
import { cv } from '../data/cv';
</script>

<template>
  <section id="skills" class="py-24 sm:py-32 bg-white">
    <div class="mx-auto max-w-3xl px-6">
      <p
        v-reveal
        class="text-sm font-semibold tracking-widest text-brand-600 uppercase"
      >
        Skills
      </p>
      <h2
        v-reveal="{ delay: 80 }"
        class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
      >
        Tools I reach for
      </h2>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <div
          v-for="(group, idx) in cv.skills"
          :key="group.name"
          v-reveal="{ delay: idx * 80 }"
          class="rounded-xl border border-slate-200 bg-slate-50/60 p-6"
        >
          <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-500">
            {{ group.name }}
          </h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="px-3 py-1.5 text-sm font-medium rounded-full bg-white text-slate-700 border border-slate-200 hover:border-brand-300 hover:text-brand-700 transition"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
