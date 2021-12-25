import react from "react";

class MyComponentChild extends react.Component {


    //     /* 
    //     JSX => return block (1 khoi div)
    //     <react.Fragment>  cach der tra ve nhieu hown 1 div 
    //     */


    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        // console.log('>>>> Check props: ', this.props)
        // var name = this.props.name
        // var age = this.props.age

        let { arrJobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button
                            onClick={() => this.handleShowHide()} >show
                        </button>
                    </div>
                    :
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

                        <div>
                            <button
                                onClick={() => this.handleShowHide()}  >hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const MyComponentChild = (props) => {
//     console.log('>>>> check child props: ', props)
//     var { name, age, arrJobs } = props
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default MyComponentChild;