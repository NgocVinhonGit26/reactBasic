import react from "react";
import MyComponentChild from "./MyComponentChild";

class MyComponent extends react.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500$' },
            { id: 'abcJob2', title: 'Testers', salary: '400$' },
            { id: 'abcJob3', title: 'Project Managers', salary: '1000$' }
        ]
    }

    handleChaneFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChaneLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('click me')
        console.log('>>> Check data input:', this.state)
    }

    /* 
    JSX => return block (1 khoi div)
    <react.Fragment>  cach der tra ve nhieu hown 1 div 
    */

    render() {

        return (
            <>
                <react.Fragment>
                    <form >
                        <label htmlFor="fname">First name:</label><br />
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={(event) => this.handleChaneFirstName(event)}
                        />
                        <br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={(event) => this.handleChaneLastName(event)}
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Submit"
                            onClick={(event) => this.handleSubmit(event)}
                        />
                    </form>
                </react.Fragment>


                <MyComponentChild
                    name={this.state.firstName}
                    age={'20'}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;