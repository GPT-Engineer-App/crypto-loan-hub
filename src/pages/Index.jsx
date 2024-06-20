// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Button, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading fontSize="4xl" color="brand.500">Welcome to Coin Capital</Heading>
        <Text fontSize="lg" color="brand.600">Register as a lender and start earning interest on your cryptocurrency.</Text>
        <RouterLink to="/register">
          <Button colorScheme="brand" size="lg" bg="brand.700" color="white" _hover={{ bg: "brand.600" }}>Get Started</Button>
        </RouterLink>
      </VStack>
    </Container>
  );
};

export default Index;
