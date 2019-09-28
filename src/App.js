import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
// debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.navbar} user={props.state.dialogsPage.dialogs} />
        <div className="app-wrapper-content">
          <Route exact path="/" render={()=><Profile state={props.state.profilePage} addPost={props.addPost} />} />
          <Route path="/dialogs" render={()=><Dialogs state={props.state.dialogsPage}/>} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" render = { () => <Friends state={props.state.dialogsPage.dialogs} />} />

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
