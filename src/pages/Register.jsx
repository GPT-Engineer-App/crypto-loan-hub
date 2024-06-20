import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    setIsRegistered(true);
    actions.setSubmitting(false);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" textAlign="center">Register as a Lender</Text>
        {isRegistered ? (
          <Text textAlign="center" color="green.500">Registration successful!</Text>
        ) : (
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field as={Input} id="name" name="name" />
                    {errors.name && touched.name ? <Text color="red.500">{errors.name}</Text> : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field as={Input} id="email" name="email" type="email" />
                    {errors.email && touched.email ? <Text color="red.500">{errors.email}</Text> : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field as={Input} id="password" name="password" type="password" />
                    {errors.password && touched.password ? <Text color="red.500">{errors.password}</Text> : null}
                  </FormControl>
                  <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>Register</Button>
                </VStack>
              </Form>
            )}
          </Formik>
        )}
      </VStack>
    </Box>
  );
};

export default Register;