
import Header from './Components/header/Header';
import './App.css';
import Home from './Components/header/Home';

import {Box} from '@mui/material';


function App() {
  return (
    <div>
      <Header/>
     <Box style ={{marginTop:54}}>
     <Home/>
     </Box>
    </div>
  );
}

export default App;
