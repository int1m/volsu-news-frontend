<template>
  <template></template>
</template>

<script lang="ts" setup>
import { defineNuxtRouteMiddleware, definePageMeta, navigateTo } from '#imports';

definePageMeta({
  middleware: [defineNuxtRouteMiddleware(() => {
    return navigateTo('/news');
  })],
})
</script>

<style lang="scss" scoped></style>
