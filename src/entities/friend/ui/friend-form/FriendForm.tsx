import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FriendSchema } from '../../../../shared/validation';
import './styles.scss';

export type FriendFormInitialValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  twitter: string;
};

interface FriendFormProps {
  buttonLabel: string;
  friendFormInitialValues?: FriendFormInitialValues;
  onSubmit: (values: FriendFormInitialValues) => void;
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  twitter: '',
};

export function FriendForm({ buttonLabel, friendFormInitialValues, onSubmit }: FriendFormProps) {
  return (
    <Formik
      initialValues={friendFormInitialValues || initialValues}
      validationSchema={FriendSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <FormGroup className="form-group">
            <Field
              name="firstName"
              placeholder="First Name"
              className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`}
            />
            <ErrorMessage component="div" name="firstName" className="invalid-feedback" />
          </FormGroup>

          <FormGroup className="form-group">
            <Field
              name="lastName"
              placeholder="Last name"
              className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
            />
            <ErrorMessage component="div" name="lastName" className="invalid-feedback" />
          </FormGroup>

          <FormGroup className="form-group">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
            />
            <ErrorMessage component="div" name="email" className="invalid-feedback" />
          </FormGroup>

          <FormGroup className="form-group">
            <Field
              type="tel"
              name="phone"
              placeholder="Phone"
              className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
            />
            <ErrorMessage component="div" name="phone" className="invalid-feedback" />
          </FormGroup>

          <FormGroup className="form-group">
            <Field
              name="twitter"
              placeholder="Twitter"
              className={`form-control ${touched.twitter && errors.twitter ? 'is-invalid' : ''}`}
            />
            <ErrorMessage component="div" name="twitter" className="invalid-feedback" />
          </FormGroup>

          <Button type="submit" variant="dark" className="btn-block btn-submit" disabled={isSubmitting}>
            {buttonLabel}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
