import react from "react";

class MyComponentChild extends react.Component {

    state = {
        firstName: '',
        lastName: ''
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
        console.log('>>>> Check props: ', this.props)
        // var name = this.props.name
        // var age = this.props.age

        var { name, age, arrJobs } = this.props
        return (
            <>
                <div className="job-lists">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default MyComponentChild;