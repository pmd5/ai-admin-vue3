<template>
  <div class="h-full p-4">
    <div class="text-base font-600">{{ deptTitle }}</div>
    <div class="mt-2 text-sm text-[--text-color-secondary]">{{ t('routes.case.deptId') }}：{{ deptId }}</div>
    <div class="mt-4 text-sm text-[--text-color-secondary]">{{ t('routes.case.todo') }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useI18n } from '@/hooks/useI18n';

  const route = useRoute();
  const { t } = useI18n();

  const deptId = computed(() => {
    const value = route.query.deptId;
    if (Array.isArray(value)) {
      return value[0] || '-';
    }
    return value || String((route.meta as Recordable).caseDeptId || '-');
  });

  const deptTitle = computed(() => {
    return String(route.meta.title || t('routes.case.list'));
  });
</script>
