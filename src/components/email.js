import React from "react";
import Sidebar from "./sidebar";
import SingleEmail from "./single-email";
import EmailList from "./email-list";
import "./email.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Email() {
  return (
    <Router>
      <div className="email">
        <Sidebar />
        <main>
          <Route exact path="/inbox" render ={ (props) => < EmailList {...props}  folderId="inbox"  /> } />
          <Route exact path="/spam" render ={ (props) => < EmailList {...props}  folderId="spam"  /> } />
          <Route exact path="/inbox/:emailId" render {(props) => <SinglEmail {...props} emailId={1} /> } />
          {/* <SingleEmail folderId="inbox" emailId="1" /> */}
        </main>
      </div>
    </Router>
  );
}
