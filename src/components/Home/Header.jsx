import { Stack, Center } from '@chakra-ui/react'

export default function Header({ head = "Welcome to my world" }) {
    return (
        <Stack
            backgroundColor={'#87A96B'}
            height={20}
            justifyContent={'space-around'}
        >
            <Center> {head} </Center>
        </Stack>
    )
}