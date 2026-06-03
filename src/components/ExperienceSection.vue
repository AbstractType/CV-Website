<script setup lang="ts">
import { cv } from '../data/cv';
import ExperienceItem from './ExperienceItem.vue';
</script>

<template>
  <section id="experience" class="py-24 sm:py-32 bg-slate-50">
    <div class="mx-auto max-w-3xl px-6">
      <p
        v-reveal
        class="text-sm font-semibold tracking-widest text-brand-600 uppercase"
      >
        Experience
      </p>
      <h2
        v-reveal="{ delay: 80 }"
        class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
      >
        Where I've worked
      </h2>

      <div class="mt-12">
        <ExperienceItem
          v-for="job in cv.experience"
          :key="`${job.company}-${job.start}`"
          :job="job"
        />
      </div>
    </div>
  </section>
</template>
