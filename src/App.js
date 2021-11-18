import React, { Component } from "react";
import NavbarComp from "./components/NavbarComp";
import CardComp from "./components/CardComp";
import {
  BrowserRouter ,
  Route,

} from "react-router-dom";
import HomeUserCon from "./containers/HomeUserCon";
import CreateUserCon from "./containers/CreateUserCon";
import EditUserCon from "./containers/EditUserCon";
import DetailUserCon from "./containers/DetailUserCon";

export default class App extends Component {
  state = {
    title: "Neo People",

    users: [
      {
        id: 1,
        nama: "zaky",
        alamat: "palangki",
        umur: "21",
        nohp: "321323322",
      },
      {
        id: 2,
        nama: "kenji",
        alamat: "solok",
        umur: "13",
        nohp: "53453453",
      },
      {
        id: 3,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 4,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 5,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 6,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 7,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 8,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 9,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 10,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 11,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 12,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
      {
        id: 13,
        nama: "madu",
        alamat: "bukittinggi",
        umur: "15",
        nohp: "676464564",
      },
    ],
  };

  render() {
    return (
      <div>
        <NavbarComp />
        <CardComp title={this.state.title} />
        

        <BrowserRouter>
        
            <Route  path="/"  exact  >
              <HomeUserCon users={this.state.users} />
            </Route>
            <Route path="/edit/:id" exact   >
              <EditUserCon />
            </Route>
            <Route path="/detail/:id" axact  >
            <DetailUserCon />
            </Route>
            <Route path="/create" exact  >
              <CreateUserCon />
            </Route>
        
        </BrowserRouter>
          
        
      </div>
    );
  }
}
