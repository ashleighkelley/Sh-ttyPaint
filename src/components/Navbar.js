import {useState, useEffect, useContext} from 'react'
import logo from '../site-images/logo/logo.png'
import {AppBar, Toolbar, IconButton, Button, Tooltip} from '@mui/material'
import { CreditCard } from '@mui/icons-material'
import {HashLink} from 'react-router-hash-link'
import { connectWallet, getCurrentWalletConnected } from '../util/interact'
import { MinterContext } from '../context/context'


//Navbar button names
const pages = ['About', 'Mint'];

const Navbar = () => {

  //State variables
  const [walletAddress, setWallet] = useContext(MinterContext);
  const [walletStatus, setWalletStatus] = useState("");

  useEffect(() => {
    async function getConnectedWallet() {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address)
      setWalletStatus(status); 
      addWalletListener();
    }
    getConnectedWallet();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWalletStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setWalletStatus({walletAddress});
        } else {
          setWallet("");
          setWalletStatus("🦊 Connect to Metamask");
        }
      });
    } else {
      setWalletStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            Please install Metamask to connect your wallet.
          </a>
        </p>
      );
    }
  }

  return (
    <AppBar elevation={0} position='static'>
      <Toolbar disableGutters sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <img src={logo} alt="shitty paint" width="130" height="75"/>
        
        <div>
          {pages.map((page) => {
            return (
              <Button color='secondary' component={HashLink} smooth to={'/Home#' + page}>{page}</Button>
            )
          })}
        </div>

        {walletAddress.length > 0 ? (
          <Tooltip title={'Connected: '+ walletAddress}>
            <IconButton
              color='inherit'
              size="large"
              onClick={connectWalletPressed}
            >
              <CreditCard/>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title={walletStatus}>
            <IconButton
              color='error'
              size="large"

              onClick={connectWalletPressed}
            >
              <CreditCard/>
            </IconButton>
          </Tooltip>
        )}            
        
        
      </Toolbar>
    </AppBar>
  );
                  
}

export default Navbar;