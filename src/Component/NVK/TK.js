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
            <h1> Thống kê lượng hàng tồn kho</h1>
            {/* thống kê hàng hóa đã nhập */}
            <div>
                <h2> Quản Lý Hàng Hóa Đã Nhập</h2>
                <form className="row">
                    <div className="column">
                        <label >Từ ngày</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="from" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <div className="column">
                        <label>Đến ngày</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="to" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <button  class="btn btn-primary" name="PN" onClick={(event)=>Handler_OnClick(event)} >Thống kê</button>
                </form>
                <div >
                </div>
                <br></br>
                <h2> Bảng Thống Kê</h2>
                <div >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Hàng Hóa</th>
                                <th scope="col">Nhà cung cấp</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Đơn Giá</th>
                                <th scope="col">NhânViên</th>
                                <th scope="col">Kho </th>
                                <th scope="col">Ngày nhập </th>
                                <th scope="col">Tổng Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListPN data={PNData} />
                        </tbody>
                    </table>
                </div>
            </div>
            <br></br>
            {/* Thống kê hàng hóa đã xuất */}
            <div>

                <h2> Quản Lý Hàng Hóa Đã Xuất</h2>
                <form action method="get" className="row">
                    <div className="column">
                        <label >Từ ngày</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="from" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <div className="column">
                        <label>Đến ngày</label>
                        <input className="form-control" style={{ maxWidth: '50%' }} type="datetime-local" name="to" onChange={(event)=>Handler_Onchange(event)}></input>
                    </div>
                    <button class="btn btn-primary" name="PX" onClick={(event)=>Handler_OnClick(event)} >Thống kê</button>
                </form>
                <div >
                </div>
                <br></br>
                <h2> Bảng Thống Kê</h2>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Hàng Hóa</th>
                                <th scope="col">Kho</th>
                                <th scope="col">Số Lượng</th>
                                <th scope="col">Đơn Giá</th>
                                <th scope="col">Nhân Viên</th>
                                <th scope="col">Chi Nhánh</th>
                                <th scope="col">Ngày xuất </th>
                                <th scope="col">  Tổng tiền</th>
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
