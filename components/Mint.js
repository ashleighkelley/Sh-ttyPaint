import {Box, Button} from '@mui/material'
import { mintNFT } from "../util/interact";
import {useState} from 'react'

function Mint(props) {
    const [mintSuccess, setMintSuccess] = useState("");
    const [mintStatus, setMintStatus] = useState("");

    const onMintPressed = async () => {
        const { success, status } = await mintNFT();
        setMintSuccess(success);
        setMintStatus(status);
    };

    return (
        <section id="Mint">
            <Box 
                sx={{py:5}}
                display='flex'
                alignItems='center'
                justifyContent="center"
            >
                <Button variant='outlined' color='secondary' onClick={onMintPressed}>Mint</Button>
            </Box>

            {mintSuccess === false 
                ? <p>{mintStatus}</p>
                : null
            }
        </section>
    )
}

export default Mint;