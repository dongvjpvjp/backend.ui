import react,{useReducer} from 'react';
import Context from './Context'
import {BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import NVBH from './Screen/NVBH';
import NVCN from './Screen/NVCN';
import NVT from './Screen/NVT';
import NVK from './Screen/NVK';
import Login from './Screen/Login';
function App() {
  const Store = {
    IsLogIn:false,
    // LOGIN
    NVInfo:{tennv:"err"},
    AllNVInfo:[],
    QLNVSTT:0,
    //NV INFO
    QLPCTSTT:0,
    QLPNTSTT:0,
    AllPCT:[],
    AllPNT:[],
    AllSK:[],
    QLSKSTT:0,
    //PHIEU CHI/NHAN/SK INFO
    AllHH:[],
    QLHHSTT:0,
    AllPN:[],
    QLPNSTT:0,
    AllCTPN:[],
    //HH/
    AllHD:[],
    AllCTHD:[],
    QLCTHDSTT:0,
    QLHDSTT:0,
    //Hoa don    
    NVCNSTT:0,
    NVKSTT:0,
    // STT RENDER
  }
  const DisPatch = (state,action) => {
    switch(action.type){
      case "IsLogIn": {
        return {
          ...state,IsLogIn:!state.IsLogIn
        }
      }
      // LOGIN

      case "NVCNSTT": {
        return {
          ...state,NVCNSTT:action.payload
        }
      }
      case "NVKSTT": {
        return {
          ...state,NVKSTT:action.payload
        }
      }
     // STT RENDER
      case "NVInfo": {
        return {
          ...state,NVInfo:action.payload
        }
      }
      case "AllNVInfo": {
        return {
          ...state,AllNVInfo:action.payload
        }
      }
      case "QLNVSTT": {
        return {
          ...state,QLNVSTT:action.payload
        }
      }
       //NV INFO
       case "AllPCT": {
        return {
          ...state,AllPCT:action.payload
        }
      }
       case "AllPNT": {
        return {
          ...state,AllPNT:action.payload
        }
      }
      case "QLPCTSTT": {
        return {
          ...state,QLPCTSTT:action.payload
        }
      }
      case "QLPNTSTT": {
        return {
          ...state,QLPNTSTT:action.payload
        }
      }
       //PHIEU CHI nhan tien 
       case "AllSK": {
        return {
          ...state,AllSK:action.payload
        }
      }
      case "QLSKSTT": {
        return {
          ...state,QLSKSTT:action.payload
        }
      }
      // su kien
       case "AllHD": {
        return {
          ...state,AllHD:action.payload
        }
      }
       case "AllCTHD": {
        return {
          ...state,AllCTHD:action.payload
        }
      }
      case "QLCTHDSTT": {
        return {
          ...state,QLCTHDSTT:action.payload
        }
      }
      case "QLHDSTT": {
        return {
          ...state,QLHDSTT:action.payload
        }
      }
      // Hoa don
      
       case "QLPNSTT":{
        return {
          ...state,QLPNSTT:action.payload
        }
      }
       case "QLHHSTT":{
        return {
          ...state,QLHHSTT:action.payload
        }
      }
       case "AllHH":{
        return {
          ...state,AllHH:action.payload
        }
      }
       case "AllPN":{
        return {
          ...state,AllPN:action.payload
        }
      }
       case "AllCTPN":{
        return {
          ...state,AllCTPN:action.payload
        }
      }
      // Hang hoa
      default: console.log("LOI DISPATCH");
    }
  }
  const [State,SetState] = useReducer(DisPatch,Store);
  return (
    <Context.Provider value={[State,SetState]}>
     <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/NVBH/:manv" component={NVBH}/>
        <Route path="/NVCN/:manv" component={NVCN}/>
        <Route path="/NVT/:manv" component={NVT}/>
        <Route path="/NVK/:manv" component={NVK}/>
      </Switch>

     </Router>
    </Context.Provider>
  );
}

export default App;
