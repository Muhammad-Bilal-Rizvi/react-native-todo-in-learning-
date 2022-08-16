import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function AppBar() {
  return <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack bg="#6200ee" px="1" py="3" justifyContent="space-around" alignItems="center" w="390%" maxW="600">
        <HStack >
          <Text style={{ fontSize: 20 }} color="white" fontSize="20" fontWeight="bold" >
            Todo App
          </Text>
        </HStack>
      </HStack>
    </>;
}

function Example() {
  return <Center>
      <AppBar />
    </Center>;
}

    export default  () => {
        return (
          <NativeBaseProvider>
            <Center>
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    