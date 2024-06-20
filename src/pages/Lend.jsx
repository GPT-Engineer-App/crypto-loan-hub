import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Select, VStack, Text } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Lend = () => {
  const [isLent, setIsLent] = useState(false);

  const initialValues = {
    cryptocurrency: "",
    amount: "",
  };

  const validationSchema = Yup.object({
    cryptocurrency: Yup.string().required("Cryptocurrency is required"),
    amount: Yup.number().positive("Amount must be positive").required("Amount is required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    setIsLent(true);
    actions.setSubmitting(false);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" textAlign="center">Lend Cryptocurrency</Text>
        {isLent ? (
          <Text textAlign="center" color="green.500">Lending successful!</Text>
        ) : (
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel htmlFor="cryptocurrency">Cryptocurrency</FormLabel>
                    <Field as={Select} id="cryptocurrency" name="cryptocurrency">
                      <option value="">Select cryptocurrency</option>
                      <option value="bitcoin">Bitcoin</option>
                      <option value="ethereum">Ethereum</option>
                      <option value="litecoin">Litecoin</option>
                    </Field>
                    {errors.cryptocurrency && touched.cryptocurrency ? <Text color="red.500">{errors.cryptocurrency}</Text> : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="amount">Amount</FormLabel>
                    <Field as={Input} id="amount" name="amount" type="number" />
                    {errors.amount && touched.amount ? <Text color="red.500">{errors.amount}</Text> : null}
                  </FormControl>
                  <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>Lend</Button>
                </VStack>
              </Form>
            )}
          </Formik>
        )}
      </VStack>
    </Box>
  );
};

export default Lend;