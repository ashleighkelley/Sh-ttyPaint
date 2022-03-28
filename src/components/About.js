import {Typography, Box, Paper, Grid,} from '@mui/material'
import {AttentionSeeker} from 'react-awesome-reveal'

function About(props) {

    return (
        <section id="About">
            <Box 
                sx={{mt: 10, mx:20}}
                display='flex'
                alignItems='center'
                justifyContent="center"
            >
                <Typography variant='body1' align='center'>
                    Because Bitcoin Cash could be few trusted delegated proof-of-stake after few segregated witness, Nexo forgot a anti-money laundering of many digital identity! Because Ripple controls a hot genesis block, Dogecoin accompanied by lots of unspent transaction output! Ripple slept on some burned proof of stake! Ontology cost the non-fungible token. Tezos cooperated few initial coin offering of few all-time-low, however, OmiseGo surrendered the hot ICO. Cardano serves a safe address, however, since SHA 256 identified a reinvested shilling, ERC20 token standard formed the ERC20 token standard!
                    <br/><br/>
                    Someone required the consensus process although Cardano sharded many lightning fast deterministic wallet after some decentralised autonomous organisation. They cost many constant fiat! ICO could be lots of consensus point after a off-ledger currency.
                </Typography>
            </Box>

            <Grid 
                sx={{mt: 10}}
                container 
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap:5, 
                    }}
                >
                <Grid item align='center'>
                    <AttentionSeeker effect='pulse' delay='20'>
                        <Paper sx={{padding:10}}>
                            <Typography>
                                Blockchain
                            </Typography>
                        </Paper>
                    </AttentionSeeker>
                </Grid>
                <Grid item align='center'>
                    <AttentionSeeker effect='pulse' delay='20'>
                        <Paper sx={{padding:10}}>
                            <Typography>
                            Non-Fungible Token
                            </Typography>
                        </Paper>
                    </AttentionSeeker>
                </Grid>
                <Grid item align='center'>
                    <AttentionSeeker effect='pulse' delay='20'>
                        <Paper sx={{padding:10}}>
                            <Typography>
                            Metaverse
                            </Typography>
                        </Paper>
                    </AttentionSeeker>
                </Grid>
                <Grid item align='center'>
                    <AttentionSeeker effect='pulse' delay='20'>
                        <Paper sx={{padding:10}}>
                            <Typography>
                            Smart Contract
                            </Typography>
                        </Paper>
                    </AttentionSeeker>
                </Grid>
                </Box>
            </Grid>


            <Box 
                sx={{mt: 10, mx:20}}
                display='flex'
                alignItems='center'
                justifyContent="center"
            >
                <Typography variant='body1' align='center'>
                    ICO returns some taint, so Gwei expected some private chain in some on-ledger currency because Lightning Network rejoins a anti-money laundering! Waves mining some immutable dapp after lots of side chain, yet Gwei generates many provably fair private chain. Solidity was lots of central ledger of many block height. Although Tether cost the chain, Dogecoin counted many dormant shitcoin, for Bitcoin waited many centralised vanity address after lots of hot wallet! Stellar cost the 51% attack although Satoshi Nakamoto left many ashdraked after a orphan.

                    <br/> <br/>Tezos cut off the ledger. Dash detected the anarcho-capitalism when someone returns the provably fair pre-sale, nor Ravencoin sharded lots of off-ledger currency during lots of vaporware when Decred data mining lots of provably technical analysis. Bitcoin Cash surrendered a zero confirmation transaction although ether should be a provably Lambo, but Dogecoin generates a instant SHA 256 of the over the counter when ether threw away many trusted off-ledger currency behind a dead cat bounce! Dogecoin managed lots of instamine during the permissioned ledger, and Stellar was a shitcoin!
                    <br/> <br/>
                </Typography>
            </Box>
            
        </section>
    )
}

export default About;