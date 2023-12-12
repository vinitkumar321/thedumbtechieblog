import { Box, SimpleGrid } from '@chakra-ui/react'

const Home = () => {
    console.log("#Home")
    return (
        <>
            <SimpleGrid columns={3} spacing={10} p={10}>
                <Box
                    key="problemSolving"
                    bg="teal.300"
                    height="250px"
                    borderRadius="md"
                    shadow="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                >
                    Problem Solving
                </Box>
                <Box
                    key="readAndWatch"
                    bg="teal.300"
                    height="250px"
                    borderRadius="md"
                    shadow="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                >
                    Read And Watch
                </Box>

            </SimpleGrid>
        </>
    )
}

export default Home;