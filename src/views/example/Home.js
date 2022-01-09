import react from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import avatar from '../../assets/images/bin.jpg'

class Home extends react.Component {

    componentDidMount() {
        setTimeout(() => {
            // console.log('check timeout')
            this.props.history.push('/todos')
        }, 3000)
    }
    render() {
        console.log('>>>>> check props: ', this.props)
        return (
            <>
                <div>helllo</div>
                <div>
                    <img src={avatar} style={{ width: '250px', height: '250px' }} />
                </div>
            </>
        )
    }
}

// export default withRouter(Home)
export default Color(Home)