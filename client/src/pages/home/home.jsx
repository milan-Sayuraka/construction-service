import Chart from "../../components/chart/chart";
import Chart2 from "../../components/chart/pie-chart";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetLg from "../../components/widgetLg/widgetLg";
import Transactions from "../transactions/transactions"
import Grid from '@mui/material/Grid';
import React  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { rotateAction } from '../../actions/rotateAction'

export default function Home() {
  const dispatch = useDispatch()
  const rotateAction = useSelector(state => state.rotateAction)
 
  
  return (
    <Grid container spacing={2}>
      <FeaturedInfo />
      <Grid item xs={8}>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        </Grid>
        <Grid item xs={4}>
        <Chart2/>
      </Grid>
      <p>Count is: {rotateAction}</p>
      <button onClick={() =>  dispatch(rotateAction({ type: "Bus" }))}>-</button>
      {/* <Grid item xs={4}>
        <WidgetSm />
      </Grid> */}
      {/* <Grid item xs={12} >
        <WidgetLg />
      </Grid> */}
    </Grid>
  );
}

// const mapStateToProps = function(state) {
//   return {
//     profile: state.user.profile,
//     loggedIn: state.auth.loggedIn
//   }
// }

// export default connect(mapStateToProps)(Home);