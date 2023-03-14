import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Grid from '@mui/material/Grid';
import React  from 'react';

export default function FeaturedInfo() {
  return (


<Grid container>
<div className="featured">
     <Grid item xs={4} md={10}> 
               <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> 
     </Grid>
     <Grid item xs={4} md={10}>
               <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
     </Grid>
     <Grid item xs={4} md={10}>
               <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
     </Grid>
     </div>
</Grid>


  );
}
