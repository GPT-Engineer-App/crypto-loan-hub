import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="white" fontWeight="bold">Crypto Loan</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/register">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Register
            </Button>
          </RouterLink>
          <RouterLink to="/lend">
            <Button as={Link} colorScheme="teal" variant="ghost" mr={4}>
              Lend
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;