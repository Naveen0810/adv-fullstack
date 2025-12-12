import React, { Component } from 'react';

class ClassBasedComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Naveen",
            password: "admin@123"
        };

        this.handler = this.handler.bind(this); // bind handler
    }

    handler() {
        alert(`Name: ${this.state.name}\nPassword: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center", color: "red" }}>
                    Class Based Component
                </h1>

                <h3>{this.state.name}</h3>
                <h3>{this.state.password}</h3>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <h4 style={{ margin: 0 }}>Name:</h4>
                    <input
                        type="text"
                        placeholder="Enter the name"
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
                    <h4 style={{ margin: 0 }}>Password:</h4>
                    <input
                        type="password"
                        placeholder="Enter the password"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </div>


                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handler}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default ClassBasedComponent;
