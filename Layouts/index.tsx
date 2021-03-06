import { Container, Flex, Text, Box } from "@chakra-ui/react";

// Components
import NavbarComp from "../components/Navbar";
import SideBar from "../components/sidebar";

const PageLayout = ({ children }) => {
  return (
    <>
      <Container maxW="container.xl">
        <NavbarComp />
      </Container>
      <Flex color="white" display={{ base: "none", md: "flex" }} mt="4">
        <Box
          flex={{ base: "none", md: ".5", lg: ".3" }}
          ml="3"
          borderRadius="10"
        >
          <SideBar />
        </Box>
        <Box flex="1" bg="brandBG" ml="3" mr="3" borderRadius="10" p="5">
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;
