import React from "react";
import { Button, Divider, Heading, VStack, Stack, ScrollView, Center, NativeBaseProvider } from "native-base";

const AddButton = () => {
    return <ScrollView showsVerticalScrollIndicator={false} px="3">
        <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">

            <Stack mb="2.5" mt="1.5" direction={{
                base: "column",
                md: "row"
            }} space={2} mx={{
                base: "auto",
                md: "0"
            }}>
                <Button size="lg" colorScheme="blue" >
                    Add Task
                </Button>

            </Stack>

            <Divider w="100%" />

        </VStack>
    </ScrollView>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <AddButton />
            </Center>
        </NativeBaseProvider>
    );
};
