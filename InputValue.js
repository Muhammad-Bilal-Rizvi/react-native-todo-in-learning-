import React from "react";
import { Input, Stack, Center, NativeBaseProvider } from "native-base";

const InputValue = () => {
  return <Stack space={4} w="175%" marginTop="1">
      <Input variant="outline" placeholder="Task"  
      style={{ fontSize: 16, color: 'blue', padding: "14", height: "90", textAlign: "center" }} />
    </Stack>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <InputValue />
            </Center>
          </NativeBaseProvider>
        );
    }