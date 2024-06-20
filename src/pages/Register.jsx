import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
    <Box p={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <VStack spacing={4} align="stretch">
        <Heading fontSize="2xl" textAlign="center" color="brand.500">Register as a Lender</Heading>
        {isRegistered ? (
          <Text textAlign="center" color="green.500">Registration successful!</Text>
        ) : (
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel htmlFor="name" color="brand.600">Name</FormLabel>
                    <Field as={Input} id="name" name="name" bg="brand.500" color="white" />
                    {errors.name && touched.name ? <Text color="red.500">{errors.name}</Text> : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email" color="brand.600">Email</FormLabel>
                    <Field as={Input} id="email" name="email" type="email" bg="brand.500" color="white" />
                    {errors.email && touched.email ? <Text color="red.500">{errors.email}</Text> : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password" color="brand.600">Password</FormLabel>
                    <Field as={Input} id="password" name="password" type="password" bg="brand.500" color="white" />
                    {errors.password && touched.password ? <Text color="red.500">{errors.password}</Text> : null}
                  </FormControl>
                  <Button type="submit" colorScheme="brand" isLoading={isSubmitting} bg="brand.700" color="white" _hover={{ bg: "brand.600" }}>Register</Button>
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