import { Container, Text, VStack, Button, Box, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import futuristicGraphic from "../assets/futuristic-graphic.png";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="brand.900">
      <VStack spacing={4} as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading fontSize="6xl" color="brand.500" textAlign="center">Crypto Loan</Heading>
        <Text fontSize="2xl" color="brand.600" textAlign="center">Register as a lender and start earning interest on your cryptocurrency.</Text>
        <RouterLink to="/register">
          <Button colorScheme="blue" size="lg" bg="blue.500" color="white" _hover={{ bg: "blue.400" }}>Get Started</Button>
        </RouterLink>
        <Image src={futuristicGraphic} alt="Futuristic Graphic" boxSize="200px" mt={8} />
      </VStack>
    </Container>
  );
};

export default Index;