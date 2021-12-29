<template>
	<div class="p-10">
    <Form :validation-schema="formSchema">
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
        <Button @click.prevent="onSetValues" type="secondary">Test Data</Button>
        <Button @click.prevent="onReset" type="secondary">Reset</Button>
        <Button :disable="hasError" type="primary">Submit</Button>
      </template>
    </Form>
	</div>
</template>

<script setup>
import FormInput from './components/FormInput.vue';
import Form from "./components/Form.vue";
import Button from "./components/Button.vue";

import { computed } from "vue";
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup';

const formSchema = yup.object({
  name: yup.string().required('This field is required.'),
  email: yup.string().required('This field is required.').email('Please enter a valid email.'),
  phoneNumber: yup.string().matches(/^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/, { message: 'Please enter a valid phone number.' }),
})

const { resetForm, setValues } = useForm({ validationSchema: formSchema })

const { value: nameValue, errorMessage: nameError } = useField('name')
const { value: emailValue, errorMessage: emailError } = useField('email')
const { value: phoneNumberValue, errorMessage: phoneNumberError } = useField('phoneNumber')

const hasError = computed(() => !!(nameError.value || emailError.value || phoneNumberError.value))

function onReset() {
  const yes = confirm('Are you sure you want to reset?')

  if (!yes) return;

  resetForm()
}

function onSetValues() {
  setValues({
    name: 'Yap Yee Qiang',
    email: 'yapyeeqiang@gmail.com',
    phoneNumber: '0198248014',
  })
}
</script>
