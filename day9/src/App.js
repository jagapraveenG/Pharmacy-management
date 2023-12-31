import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Components/Login";

import Home from "./Assets/Components/Home/Home";
import Inventory from "./Assets/Components/Inventory/Inventory";
import PharmacyDashboard from "./Assets/Components/PharmacyDashboard/PharmacyDashboard";
import FeaturedProducts from "./Assets/FeaturedProduct/FeaturedProducts";
import Navbar from "./Assets/Components/Navbar/Navbar";
import PointOfSale from "./Assets/Components/PointofSale/PointofSale";
import ReportAnalysis from "./Assets/Components/ReportandAnalytics/ReportAnalysis";

import HelpSupport from "./Assets/Components/Help/HelpSupport";
import PurchasingDetails from "./Assets/Components/PurchasingProcurement/PurchasingDetails";



function App()
{
  return(
    <div className="App">
   <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<LoginPage/>}/>
    
        <Route path="/nav" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Inventory" element={<Inventory/>}/>
        <Route path="/Dashboard" element={<PharmacyDashboard/>}/>
        <Route path="/Featured Products" element={<FeaturedProducts/>}/>
        <Route path="/Sales" element={<PointOfSale/>}/>
        <Route path="/reports" element={<ReportAnalysis/>}/>
        <Route path="/help" element={<HelpSupport/>}/>
        <Route path="/purchasing" element={<PurchasingDetails/>}/>
      
  
    </Routes>
   </BrowserRouter>

    </div>
  );
}
export default App