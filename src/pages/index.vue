<script lang="ts" setup>
import { defineNuxtRouteMiddleware, definePageMeta, navigateTo } from '#imports';

definePageMeta({
  middleware: [defineNuxtRouteMiddleware(() => navigateTo('/news'))],
});
</script>

<style lang="scss" scoped></style>
