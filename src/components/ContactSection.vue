<script setup lang="ts">
import { Mail } from '@lucide/vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import { cv } from '../data/cv';
</script>

<template>
  <section id="contact" class="py-24 sm:py-32 bg-white">
    <div class="mx-auto max-w-2xl px-6 text-center">
      <p
        v-reveal
        class="text-sm font-semibold tracking-widest text-brand-600 uppercase"
      >
        Contact
      </p>
      <h2
        v-reveal="{ delay: 80 }"
        class="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900"
      >
        Let's talk
      </h2>
      <p
        v-reveal="{ delay: 160 }"
        class="mt-4 text-slate-600 leading-relaxed"
      >
        If you're hiring, collaborating on something interesting, or just want to
        chat — I'd love to hear from you.
      </p>

      <div
        v-reveal="{ delay: 240 }"
        class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <a
          :href="`mailto:${cv.email}`"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-700 hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          <Mail :size="16" aria-hidden="true" />
          {{ cv.email }}
        </a>
      </div>

      <div
        v-reveal="{ delay: 320 }"
        class="mt-8 flex items-center justify-center gap-3"
      >
        <a
          :href="cv.links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="inline-grid place-items-center h-11 w-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <IconLinkedin :size="18" />
        </a>
        <a
          v-if="cv.links.github"
          :href="cv.links.github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="inline-grid place-items-center h-11 w-11 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <IconGithub :size="18" />
        </a>
      </div>
    </div>
  </section>
</template>
