import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Select, VStack, Text, Input, Heading } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

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
    <Box p={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <VStack spacing={4} align="stretch">
        <Heading fontSize="2xl" textAlign="center" color="brand.500">Lend with Coincapital</Heading>
        {isLent ? (
          <Text textAlign="center" color="green.500">Lending successful!</Text>
        ) : (
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <VStack spacing={4} align="stretch">
                  <FormControl>
                    <FormLabel htmlFor="cryptocurrency" color="brand.600">Cryptocurrency</FormLabel>
                    <Field as={Select} id="cryptocurrency" name="cryptocurrency" bg="brand.500" color="white">
                      <option value="">Select cryptocurrency</option>
                      <option value="bitcoin">Bitcoin</option>
                      <option value="ethereum">Ethereum</option>
                      <option value="litecoin">Litecoin</option>
                    </Field>
                    {errors.cryptocurrency && touched.cryptocurrency ? <Text color="red.500">{errors.cryptocurrency}</Text> : null}
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="amount" color="brand.600">Amount</FormLabel>
                    <Field as={Input} id="amount" name="amount" type="number" bg="brand.500" color="white" />
                    {errors.amount && touched.amount ? <Text color="red.500">{errors.amount}</Text> : null}
                  </FormControl>
                  <Button type="submit" colorScheme="brand" isLoading={isSubmitting} bg="brand.700" color="white" _hover={{ bg: "brand.600" }}>Lend</Button>
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