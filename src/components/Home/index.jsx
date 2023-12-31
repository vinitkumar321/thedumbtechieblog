import React, { useState, useEffect } from 'react'
import { Button, Box, SimpleGrid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    console.log("#Home")
    const navigate = useNavigate()
    const [path, setPath] = useState('')

    useEffect(() => {
        navigate(path)
    }, [navigate, path])

    return (
        <>
            <Header head="Welcome to my World" />
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
                    onClick={() => setPath('/everything-tech')}
                >
                    Everything Tech
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
                    onClick={() => setPath('/interesting-reads')}
                >
                    Interesting Reads
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
                    onClick={() => setPath('/fitness')}
                >
                    My Fitness Journey
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
                    onClick={() => setPath('/my-writings')}
                >
                    My Writings
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
                    onClick={() => setPath('/my-photography')}
                >
                    My Photography
                </Button>

            </SimpleGrid>
        </>
    )
}

export default Home;