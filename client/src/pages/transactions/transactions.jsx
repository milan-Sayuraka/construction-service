import "./transactions.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { transactions } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import PaymentIcon from '@mui/icons-material/Payment';
import Moment from 'moment';
import PaymentModal from '../../modals/paymentModal'
import StripePayment from '../../components/stripePayment/stripePay'
import React  from 'react';

export default function Transactions() {
  const [data, setData] = useState(transactions);
  const [paymentOption, setPaymentoption] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  console.log('sample..', data)
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  function handlePayClick() {
    console.log('click press')
  }
  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    { field: "description", headerName: "Description", width: 250 },
    {
      field: "date", headerName: "Date", width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {Moment(params.row.date).format('d MMM YYYY')}
          </div>
        );
      },
    },
    { field: "amount", headerName: "Amount", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name} */}
            <Button type={params.row.status} />
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        const showAlert = () => {
          console.log('auto click check')
          setPaymentoption(true)
          setSelectedRow(params.row)
        }
        return (
          <>{params.row.status !== 'Approved' ?
            <button className="widgetPayButton"  
            onClick={() => showAlert()}
            >
              <PaymentIcon className="widgetSmIcon" />
              PAY
            </button> : null
          }
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {!paymentOption ?
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={5}
        /> : <StripePayment transObj={selectedRow}/>}
      {/* <DataGrid
    rows={data}
    disableSelectionOnClick
    columns={columns}
    pageSize={8}
    checkboxSelection
  /> */}
    </div>


  );
}
