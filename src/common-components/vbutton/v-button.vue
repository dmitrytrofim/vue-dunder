<template>
  <component :is="tag" :href="props.isLink ? url : null"
    ><slot></slot
  ></component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type LinkProps =
  | { isLink: true; url: string }
  | { isLink?: false; url?: never };

const props = defineProps<LinkProps>();

const tag = computed(() => (props.isLink ? 'a' : 'button'));
</script>

<style src="./v-button.scss" scoped></style>
