import { VStack, Stack, HStack, Box } from '@chakra-ui/react'
import Timeline from './Timeline'
import ConsistencyCounter from './ConsistencyCounter'
import Header from '../Home/Header'

export default function ProblemSolving() {
    return (
        <>
            <Header />
            <HStack>
                <Box flex={2} padding={10}>
                    <Timeline />
                </Box>
                <Box flex={1} padding={10}>
                    <ConsistencyCounter />
                </Box>
            </HStack>
        </>
    )
}