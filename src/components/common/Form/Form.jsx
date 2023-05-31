import { postOrder } from "api/api";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "redux/selectors";
import * as yup from "yup";
import { toast } from "react-toastify";
import {
  ButtonWrap,
  ContactForm,
  ContactInput,
  FormBtn,
  InputWrap,
  LoginFormError,
  PlaceholderText,
  TotalPrice,
} from "./Form.styled";
import { deleteAll } from "redux/orders/ordersSlice";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const schema = yup.object().shape({
  name: yup.string().min(1).max(22).required(),
  email: yup.string().email().required(),
  phone: yup.string().min(6).max(22).required(),
  address: yup.string().min(10).max(22).required(),
});

export default function Form() {
  const dispatch = useDispatch();
  const userOrder = useSelector(getOrders);

  const totalPrice = userOrder.reduce((acc, item) => {
    const value = acc + item.price * (item.amount ? item.amount : 1);
    return +value.toFixed(2);
  }, 0);

  const submitHandler = (values, actions) => {
    const body = {
      ...values,
      order: userOrder,
    };
    if (userOrder.length > 0) {
      try {
        postOrder(body);
        toast.success("Order is submitted");
        dispatch(deleteAll());
      } catch (error) {
        toast.error(`Some error ${error.message}`);
        console.log(error);
      }
    } else {
      toast.error(`you need to order something`);
    }
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
                  type="tel"
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
              <ButtonWrap>
                <TotalPrice>Total price: {totalPrice} $</TotalPrice>
                <FormBtn type="submit">Send</FormBtn>
              </ButtonWrap>
            </ContactForm>
          );
        }}
      </Formik>
    </>
  );
}
