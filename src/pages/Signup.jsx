import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    navigate("/dashboard");
  };

  return (
    <Box p={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <VStack spacing={4} align="stretch">
        <Heading fontSize="2xl" textAlign="center" color="brand.500">Sign Up for Coin Capital</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel htmlFor="email" color="brand.600">Email</FormLabel>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} bg="brand.500" color="white" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" color="brand.600">Password</FormLabel>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} bg="brand.500" color="white" />
            </FormControl>
            {error && <Text color="red.500">{error.message}</Text>}
            <Button type="submit" colorScheme="brand" isLoading={loading} bg="brand.700" color="white" _hover={{ bg: "brand.600" }}>Sign Up</Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Signup;