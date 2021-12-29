<template>
  <button :disabled="disable" type="button" :class="buttonClass">
    <slot>Click</slot>
  </button>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  type: {
    type: String
  },
  disable: {
    type: Boolean
  }
})

const buttonClass = computed(() => {
  const typeStyle = props.type === 'primary' ? 'bg-primary border-transparent' : 'bg-white'

  return `${typeStyle} inline-flex items-center px-3 py-2 border shadow-sm text-sm leading-4 font-medium rounded-md focus:outline-none text-gray-700 disabled:cursor-not-allowed disabled:opacity-30`
})
</script>