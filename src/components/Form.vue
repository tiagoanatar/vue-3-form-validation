<template>
  <form>
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <slot />
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end space-x-2">
        <slot name="buttons" :resetForm="resetForm" :setValues="setValues" />
      </div>
    </div>
  </form>
</template>

<script setup>
import {useForm} from "vee-validate";

const props = defineProps({
  validationSchema: {
    type: Object
  }
})

const { resetForm, setValues } = useForm({ validationSchema: props.validationSchema })
</script>