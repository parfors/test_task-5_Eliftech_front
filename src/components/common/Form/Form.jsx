import { Formik } from "formik";
import * as yup from "yup";
import {
  ContactForm,
  ContactInput,
  FormBtn,
  InputWrap,
  LoginFormError,
  PlaceholderText,
} from "./Form.styled";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const schema = yup.object().shape({
  name: yup.string().min(1).max(12).required(),
  email: yup.string().email().required(),
  phone: yup.number().min(6).max(12).required(),
  address: yup.string().min(10).max(22).required(),
});

export default function Form() {
  const submitHandler = (values, actions) => {
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitHandler}
      >
        {(props) => {
          const { values } = props;
          return (
            <ContactForm autoComplete="false">
              <input type="hidden" name="form-name" value="contact" />
              <InputWrap>
                <ContactInput
                  type="text"
                  placeholder=""
                  name="name"
                  id="name_input"
                />
                <PlaceholderText className={values.name ? "active" : null}>
                  Enter your name
                </PlaceholderText>
                <LoginFormError name="name" />
              </InputWrap>
              <InputWrap>
                <ContactInput
                  type="email"
                  placeholder=""
                  name="email"
                  id="email_input"
                />
                <PlaceholderText className={values.email ? "active" : null}>
                  Enter email*
                </PlaceholderText>

                <LoginFormError name="email" />
              </InputWrap>
              <InputWrap>
                <ContactInput
                  type="text"
                  placeholder=""
                  name="phone"
                  id="name_input"
                />
                <PlaceholderText className={values.phone ? "active" : null}>
                  Enter your phone
                </PlaceholderText>
                <LoginFormError name="phone" />
              </InputWrap>
              <InputWrap>
                <ContactInput
                  type="text"
                  placeholder=""
                  name="address"
                  id="name_input"
                />
                <PlaceholderText className={values.address ? "active" : null}>
                  Enter your address
                </PlaceholderText>
                <LoginFormError name="address" />
              </InputWrap>

              <FormBtn type="submit">Send</FormBtn>
            </ContactForm>
          );
        }}
      </Formik>
    </>
  );
}
