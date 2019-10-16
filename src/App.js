import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Setting/Settings";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";

const App = (props) => {
    debugger;
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navbar} user={props.state.dialogsPage}/>
            <div className="app-wrapper-content">
                <Route exact path="/"
                       render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path="/dialogs"
                       render={() => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" render={() => <Friends state={props.state.dialogsPage.dialogs}/>}/>
            </div>
        </div>
    );
};

export default App;
