import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Button, Table, tr, tread } from "react-bootstrap";
import "./Components.css";
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	ApplyBtn = () => {};

	render() {
		return (
			<div className="NavigationBarBody">
				<Navbar style={{ display: "inline" }} fixed="bottom" expand="sm">
					<sub>
						<Table bordered responsive hover variant="dark">
							<thead>
								<tr>
									<th>TnC</th>
									<th>Online Policies</th>
									<th >Social-Media</th>
								</tr>
							</thead>
						</Table>
					</sub>
				</Navbar>
			</div>
		);
	}
}

export default Header;
