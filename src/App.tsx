import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.scss";
import Title from "./components/Title";
import CatImages from "./components/CatImages";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex className="container" direction="column" align="center" p={4}>
        <Title />
        <CatImages />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
