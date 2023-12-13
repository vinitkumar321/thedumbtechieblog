import React, { useState, useEffect } from 'react'
import { Button, Box, SimpleGrid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    console.log("#Home")
    const navigate = useNavigate()
    const [path, setPath] = useState('')

    useEffect(() => {
        navigate(path)
    }, [path])

    return (
        <>
            <SimpleGrid columns={3} spacing={10} p={10}>
                <Button
                    key="problemSolving"
                    bg="teal.300"
                    height="250px"
                    borderRadius="md"
                    shadow="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    onClick={() => setPath('/problem-solving')}
                >
                    Problem Solving
                </Button>
                <Button
                    key="readAndWatch"
                    bg="teal.300"
                    height="250px"
                    borderRadius="md"
                    shadow="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    onClick={() => setPath('/read-and-watch')}
                >
                    Read And Watch
                </Button>

            </SimpleGrid>
        </>
    )
}

export default Home;