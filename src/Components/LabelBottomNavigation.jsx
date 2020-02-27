import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button, Table, tr, tread } from "react-bootstrap";
import "./Components.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar style={{ display: "block" }} sticky="bottom" expand="sm">
        <sub>
          <Table bordered responsive hover variant="dark">
            <thead>
              <tr>
                <th>Terms & Conditions</th>
                <th>Online Policies</th>
                <th>Social-Media</th>
              </tr>
            </thead>
          </Table>
        </sub>
      </Navbar>
    );
  }
}

export default Header;
