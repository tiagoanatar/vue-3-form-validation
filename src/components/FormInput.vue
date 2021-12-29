<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700"
    >{{ label }}</label
    >
    <div class="mt-1 flex relative rounded-md shadow-sm">
      <span v-if="prefix"
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
        {{ prefix }}
      </span>
      <input
          :type="type"
          :name="name"
          :id="id"
          :class="inputClass"
          :placeholder="placeholder"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
      />
      <div
          v-if="errorMessage"
          class="
					absolute
					inset-y-0
					right-0
					pr-3
					flex
					items-center
					pointer-events-none
				"
      >
        <ExclamationCircleIcon
            class="h-5 w-5 text-red-500"
            aria-hidden="true"
        />
      </div>
    </div>
    <p v-if="errorMessage" class="mt-2 text-sm text-red-600" id="email-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import {ExclamationCircleIcon} from '@heroicons/vue/solid';
import {computed} from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String
  },
  placeholder: {
    type: String,
  },
  errorMessage: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
  },
  prefix: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const inputClass = computed(() => {
  const errorStyle = props.errorMessage ? 'border-red-300 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
  const prefixStyle = props.prefix ? 'flex-1 min-w-0 rounded-none rounded-r-md' : 'rounded-md'

  return `${errorStyle} ${prefixStyle} block w-full pr-10 focus:border-transparent focus:outline-none sm:text-sm`
})
</script>
