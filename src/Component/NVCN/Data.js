import React, { useState, useContext,useEffect } from 'react';
import Context from '../../Context'
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import QLNV from './QLNV'
import QLCT from './QLCT'
import QLV from './QLV'
import SK from './SK'
import HD from './HD'
import PTH from './PTH'
export default function Data() {
    const [State, SetState] = useContext(Context);



  switch(State.NVCNSTT){
      case 1: return <QLNV/>
      case 2: return <QLCT/>
      case 3: return <QLV/>
      case 4: return <div>Đây là trang điểm danh nhân viên</div>
      case 5: return <SK/>
      case 6: return <HD/>
      case 7: return <PTH/>
      default: return <div>Đây là trang xem doanh thu</div>  
  }
}
