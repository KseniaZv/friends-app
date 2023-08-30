import * as yup from 'yup';

const CHARS_REGEX =
  /^(?=.{1,255}$)[0-9a-zء-ي '’,?.()-ÍÑÉČËØÖÐÓŨÜÄÀÈÙÇÏÆÅÁíñéčëøöðóũüäßàèùçïæåá]+(?:['_.\s][-zء-ي]+)*$/i;

const PHONE_REGEX = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const TWITTER_REGEX = /^@?(\w){1,15}$/;

export default yup.object().shape({
  firstName: yup.string().required('First name is required').matches(CHARS_REGEX, 'Please enter a valid first name'),
  lastName: yup.string().required('Last name is required').matches(CHARS_REGEX, 'Please enter a valid last name'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email')
    .max(80, 'Please enter a valid email'),
  phone: yup.string().required('Phone is required').matches(PHONE_REGEX, 'Please enter a valid phone'),
  twitter: yup
    .string()
    .required('Twitter is required')
    .max(15, 'Please enter a valid twitter')
    .matches(TWITTER_REGEX, 'Please enter a valid twitter'),
});
