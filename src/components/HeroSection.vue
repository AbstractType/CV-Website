<script setup lang="ts">
import { ArrowDown, Mail } from '@lucide/vue';
import { cv } from '../data/cv';
</script>

<template>
  <section
    id="top"
    class="relative isolate overflow-hidden min-h-[100svh] flex items-center"
  >
    <!-- Static layered gradient background. -->
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10"
      :style="{
        backgroundImage:
          'radial-gradient(at 20% 20%, rgba(53,99,255,0.18), transparent 50%), radial-gradient(at 80% 0%, rgba(27,47,170,0.18), transparent 50%), radial-gradient(at 40% 100%, rgba(94,234,212,0.15), transparent 50%), linear-gradient(180deg, #f8fafc, #eef2ff)',
      }"
    />
    <!-- Subtle grid overlay. -->
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:36px_36px]"
    />

    <div class="mx-auto max-w-5xl px-6 py-24 sm:py-32 w-full">
      <p
        v-reveal
        class="text-sm font-semibold tracking-widest text-brand-600 uppercase"
      >
        Hi, I'm
      </p>
      <h1
        v-reveal="{ delay: 80 }"
        class="mt-3 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900"
      >
        {{ cv.name }}
      </h1>
      <p
        v-reveal="{ delay: 160 }"
        class="mt-4 text-xl sm:text-2xl font-medium text-slate-700"
      >
        {{ cv.title }}
      </p>
      <p
        v-reveal="{ delay: 240 }"
        class="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600"
      >
        {{ cv.tagline }}
      </p>

      <div
        v-reveal="{ delay: 320 }"
        class="mt-10 flex flex-wrap items-center gap-3"
      >
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-700 hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          <Mail :size="16" aria-hidden="true" />
          Get in touch
        </a>
        <a
          href="#about"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:-translate-y-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          About me
          <ArrowDown :size="16" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
