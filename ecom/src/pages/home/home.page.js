/// web hook 16.8 introduce => states on functions
// const HomePage = () => {
//     return (
//         <h1>Hello World!!</h1>
//     )
// }
import React from "react";

// statefull component , 16.8
class HomePage extends React.Component {
    constructor(props) {
        super(props)
        // initialize states 
        console.log("I am first call");
        this.state = {
            name: "Sandesh Bhattarai",
            props: {...this.props},
            userlist: [],
            loading: false
        }
    }

    componentDidMount = () => {
        console.log("After first render call")
        // update the states for once 
        // data from api call
        // data 
        this.setState((pre) => {
            return {
                ...pre,
                loading: true
            }
        })
        let api_response = [{
            name: "Sandesh Bhattarai",
            email: "sandesh.bhattarai@broadwayinfosys.com",
            address: "Kathmandu"
        }, {
            name: "Sandesh Bhattarai",
            email: "sandesh.bhattarai@broadwayinfosys.com",
            address: "Kathmandu"
        },
        {
            name: "Sandesh Bhattarai",
            email: "sandesh.bhattarai@broadwayinfosys.com",
            address: "Kathmandu"
        },
        {
            name: "Sandesh Bhattarai",
            email: "sandesh.bhattarai@broadwayinfosys.com",
            address: "Kathmandu"
        }]

        // state update
        setTimeout(() => {
            this.setState((pre)=>{
                // this.state 
                return {
                    ...pre,
                    userlist: api_response,
                    loading: false
                }
            })
        }, 3000)

    }

    componentDidUpdate = () => {
        console.log("After Second render")
    }


    componentWillUnmount = () => {
        console.log("When a component is unmounted")
    }


    render = () => {
        console.log("Second or always call")
        // console.log("Props: ", this.props)
        // this.props.name = "Updated Props";
        // this.setState((pre) => {
        //     return {
        //         ...pre, 
        //         loading: true
        //     }
        // })
        this.state.props.name = "Updated Props"
        return (
            <>
                <h1>User List</h1>
                <table width="100%" border="1" cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.loading ? <tr><td colSpan="4">Loading...</td></tr> : 
                                (this.state.userlist.map((value, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                )))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default HomePage;