import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Context from '../../Context';
import Handler from '../../Utility/Handler'


const ListPN = (props) => {
    return props.data.map((item, index) => {
        return <tr key={index}>
            <td scope="row">{index}</td>
            <td>{item?.mahh}</td>
            <td>{item?.mancc}</td>
            <td>{item?.soluong}</td>
            <td>{item?.dongia}</td>
            <td>{item?.manv}</td>
            <td>{item?.makho}</td>
            <td>{item?.ngaynhap}</td>
            <td>{item?.soluong*item?.dongia}</td>
        </tr>
    })
}
const ListPX = (props) => {
    return props.data.map((item, index) => {
        return <tr key={index}>
            <td scope="row">{index}</td>
            <td>{item?.mahh}</td>
            <td>{item?.makho}</td>
            <td>{item?.soluong}</td>
            <td>{item?.dongia}</td>
            <td>{item?.manv}</td>
            <td>{item?.machinhanh}</td>
            <td>{item?.ngayxuat}</td>
            <td>{item?.soluong*item?.dongia}</td>
        </tr>
    })
}
export default function HH() {
    const [State, SetState] = useContext(Context);
    const [PNData,SetPNDataInfo]=useState([]);
    const [PXData,SetPXDataInfo]=useState([]);
    const [TimeInfo, SetTimeInfo] = useState({});
    const Handler_Onchange = (event) => {
        event.preventDefault();
        SetTimeInfo({...TimeInfo,[event.target.name]:event.target.value});
    }
    const Handler_OnClick=(event=>{
        SetTimeInfo({});
        event.preventDefault();
        if(event.target.name==="PN"){
            axios.post(`http://localhost:8080/SYS/ThongKePN`,TimeInfo).then((res,err)=>{
                if (err) console.log(err);
                console.log(TimeInfo);
                SetPNDataInfo(res.data.data)
            })
        }
        else if(event.target.name==="PX"){
            axios.post(`http://localhost:8080/SYS/ThongKePX`,TimeInfo).then((res,err)=>{
                if (err) console.log(err);
                SetPXDataInfo(res.data.data)
            })
        }
    })

   
    return (
        <div className="container-fluid mt--10">
            {/* table */}
            <h1> Th???ng k?? l?????ng h??ng t???n kho</h1>
            {/* th???ng k?? h??ng h??a ???? nh???p */}
            <div>
                <h2> Qu???n L?? H??ng H??a ???? Nh???p</h2>
                <form className="row">
                    <div className="column">
                        <label >T??? ng??y</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="from" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <div className="column">
                        <label>?????n ng??y</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="to" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <button  class="btn btn-primary" name="PN" onClick={(event)=>Handler_OnClick(event)} >Th???ng k??</button>
                </form>
                <div >
                </div>
                <br></br>
                <h2> B???ng Th???ng K??</h2>
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">H??ng H??a</th>
                                <th scope="col">Nh?? cung c???p</th>
                                <th scope="col">S??? l?????ng</th>
                                <th scope="col">????n Gi??</th>
                                <th scope="col">Nh??nVi??n</th>
                                <th scope="col">Kho </th>
                                <th scope="col">Ng??y nh???p </th>
                                <th scope="col">T???ng Ti???n</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListPN data={PNData} />
                        </tbody>
                    </table>
                </div>
            </div>
            <br></br>
            {/* Th???ng k?? h??ng h??a ???? xu???t */}
            <div>

                <h2> Qu???n L?? H??ng H??a ???? Xu???t</h2>
                <form action method="get" className="row">
                    <div className="column">
                        <label >T??? ng??y</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="from" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <div className="column">
                        <label>?????n ng??y</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="to" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <button class="btn btn-primary" name="PX" onClick={(event)=>Handler_OnClick(event)} >Th???ng k??</button>
                </form>
                <div >
                </div>
                <br></br>
                <h2> B???ng Th???ng K??</h2>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">H??ng H??a</th>
                                <th scope="col">Kho</th>
                                <th scope="col">S??? L?????ng</th>
                                <th scope="col">????n Gi??</th>
                                <th scope="col">Nh??n Vi??n</th>
                                <th scope="col">Chi Nh??nh</th>
                                <th scope="col">Ng??y xu???t </th>
                                <th scope="col">T???ng ti???n</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListPX data={PXData} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )


}
  // GET NV
