import { Center } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function ConsistencyCounter() {
    return (
        <>
            <Center>
                Consistency Counter
            </Center>
            <Center padding={10}>
                <CircularProgress size={50} value={40} thickness={10} color='orange.400'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                </CircularProgress>
            </Center>
        </>
    )
}