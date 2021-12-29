import { defineRule } from 'vee-validate';
import { required, email, regex } from "@vee-validate/rules";

defineRule('name', (value) => {
	if(!required(value)) return 'This field is required.'

	return true
});

defineRule('email', (value) => {
	if(!required(value)) return 'This field is required.'

	if(!email(value)) return 'Please enter a valid email.'

	return true
})

defineRule('phoneNumber', (value) => {
	if(!required(value)) return 'This field is required.'

	if(!regex(value, { regex: /^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/ })) return 'Please enter a valid phone number.'

	return true
})