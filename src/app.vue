<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import local from 'dayjs/locale/ru';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale(local);
dayjs.extend(duration);
dayjs.extend(relativeTime);
</script>

<style lang="scss" src="assets/styles/index.scss"></style>
