import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.900" px={4} boxShadow="md">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="brand.500" fontWeight="bold" fontSize="xl">Coin Capital</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Button as={Link} colorScheme="brand" variant="ghost" mr={4} color="brand.500">
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/register">
            <Button as={Link} colorScheme="brand" variant="ghost" mr={4} color="brand.500">
              Register
            </Button>
          </RouterLink>
          <RouterLink to="/lend">
            <Button as={Link} colorScheme="brand" variant="ghost" mr={4} color="brand.500">
              Lend
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;