import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "../src/home/Home";
import About from "./home/About";
import Service from "./home/Service";
import Contact from "./home/Contact";
import Navbar from "./components/Navbar";
import Login from "./home/Login";
import Signin from "./home/Signin";
import Profile from "./profile/Profile";
import Wallet from "./profile/wallet";
import History from "./profile/History";
import Tpin from "./profile/Tpin";
import CSR from "./profile/CSR";
import SendMoney from "./profile/sendMoney";
import AccountHandler from "./management/accountHandler";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import UserProfile from "./profile/UserProfile";
import AgentSignup from "./Agent/AgentSignup";
import AgentSignIn from "./Agent/AgentSignIn";
import AgentProfile from "./Agent/AgentProfile";
import AgentDashboard from "./AgentDashboard";
import ContactList from "./components/ContactList";
import CsrList from "./components/CsrList";
import AgentSendMoney from "./Agent/AgentSendMoney";
import AgentWallet from "./Agent/AgentWallet";
import UserRequest from "./Agent/UserRequest";
import Accountant from "./components/Accountant";
import AgentList from "./Agent/AgentList";
import AdminDashboard from './Admin/AdminDashboard'
import AdminProfile from './Admin/AdminProfile'
import AdminSignUp from "./Admin/AdminSignUp";
import AdminLogin from "./Admin/AdminLogin";
import FranchiseRegister from "./Franchise/FranchiseRegister";
import FranchiseLogin from "./Franchise/FranchiseLogin";
import FranchiseProfile from "./Franchise/FranchiseProfile";
import FranchiseDashboard from "./Franchise/FranchiseDashboard";
import AccountantDashboard from "./Accountant/AccountantDashboard";
import AccountantLogin from "./Accountant/AccountantLogin";
import AccountantRegister from "./Accountant/AccountantRegister";
import AccountantProfile from "./Accountant/AccountantProfile";
import CSRDashboard from './CSR/CSRDashboard'
import CSRRegister from './CSR/CSRRegister'
import CSRProfile from './CSR/CSRProfile'
import CSRLogin from './CSR/CSRLogin'
import Transfer from "./profile/Transfer";
import AllFranchise from "./Franchise/AllFranchise";
import AllCSR from "./CSR/AllCSR";
import AllAccountant from "./Accountant/AllAccountant";
import Common from "./Common";
import AgentTransfer from "./profile/AgentTransfer";
import TransferAgent from "./Agent/TransferAgent";
import MoneyFranchise from "./Franchise/MoneyFranchise";
import BankTransfer from "./profile/BankTransfer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/agentProfile" element={<AgentProfile />} />
        <Route path="/agent" element={<AgentDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactList" element={<ContactList />} />
        <Route path="/service" element={<Service />} />
        <Route path="/agentRegister" element={<AgentSignup />} />
        <Route path="/agentLogin" element={<AgentSignIn />} />
        <Route path="/transAgent" element={<AgentTransfer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/agentWallet" element={<AgentWallet />} />
        <Route path="/userRequest" element={<UserRequest />} />
        <Route path="/Tpin" element={<Tpin />} />
        <Route path="/history" element={<History />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/bankTransfer" element={<BankTransfer />} />
        <Route path="/CSR" element={<CSR />} />
        <Route path="/csrList" element={<CsrList />} />
        <Route path="/allAgents" element={<AgentList />} />
        <Route path="/sendMoney" element={<SendMoney />} />
        <Route path="/agentMoney" element={<AgentSendMoney />} />
        <Route path="/AccountantList" element={<Accountant />} />
        <Route path="/accountHandler" element={<AccountHandler />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/management" element={<Common />} />
        <Route path="/tansferAgent" element={<TransferAgent />} />

        {/* CSR */}
        <Route path="/csrDashboard" element={<CSRDashboard />} />
        <Route path="/csrProfile" element={<CSRProfile />} />
        <Route path="/csrRegister" element={<CSRRegister />} />
        <Route path="/csrLogin" element={<CSRLogin />} />
        <Route path="/allCSR" element={<AllCSR />} />

        {/* Franchise */}
        <Route path="/franchiseRegister" element={<FranchiseRegister />} />
        <Route path="/franchiseLogin" element={<FranchiseLogin /> }/>
        <Route path="/franchiseProfile" element={<FranchiseProfile />} />
        <Route path="/franchise" element={<FranchiseDashboard />} />
        <Route path="/allFranchises" element={<AllFranchise />} />
        <Route path="/franchiseAgent" element={<MoneyFranchise />} />

        {/* Accountant */}
        <Route path="/accountant" element={<AccountantDashboard />} />
        <Route path="/accountantLogin" element={<AccountantLogin />} />
        <Route path="/accountantRegister" element={<AccountantRegister />} />
        <Route path="/accountantProfile" element={<AccountantProfile />} />
        <Route path="/allAccountant" element={<AllAccountant />} />

        {/* Admin */}
        <Route path="/adminRegister" element={<AdminSignUp />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminProfile" element={<AdminProfile />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
