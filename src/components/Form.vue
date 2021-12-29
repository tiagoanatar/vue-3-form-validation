<template>
  <form>
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <slot />
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end space-x-2">
        <slot name="buttons" />
      </div>
    </div>
  </form>
</template>