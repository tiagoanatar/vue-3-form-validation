<template>
	<div class="p-10">
    <Form>
      <FormInput
          id="name"
          name="name"
          label="Name"
          :errorMessage="nameError"
          v-model="nameValue"
      />

      <FormInput
          id="email"
          type="email"
          name="email"
          label="Email"
          :errorMessage="emailError"
          v-model="emailValue"
      />

      <FormInput
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          label="Phone Number"
          prefix="+60"
          :errorMessage="phoneNumberError"
          v-model="phoneNumberValue"
      />

      <template #buttons>
        <Button @click.prevent="onReset" type="secondary">Reset</Button>
        <Button @click.prevent="onSubmit" type="primary">Submit</Button>
      </template>
    </Form>
	</div>
</template>

<script setup>
import FormInput from './components/FormInput.vue';
import Form from "./components/Form.vue";
import Button from "./components/Button.vue";

import { useField, useForm } from 'vee-validate'

const { resetForm, handleSubmit } = useForm()

const { value: nameValue, errorMessage: nameError } = useField('name', 'name')
const { value: emailValue, errorMessage: emailError } = useField('email', 'email')
const { value: phoneNumberValue, errorMessage: phoneNumberError } = useField('phoneNumber', 'phoneNumber')

function onReset() {
  const yes = confirm('Are you sure you want to reset?')

  if (!yes) return;

  resetForm()
}

const onSubmit = handleSubmit(values => {
  console.log(values)
})
</script>
