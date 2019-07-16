import React, {Component} from 'react';
import Footer from './Footer';
import Countries from './Countries'

class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            datas:[],
        };

    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(jsonData =>{
            this.setState({datas:jsonData}
                );
            console.warn(this.state.datas);
        })
    }

    render(){
        return(
           
            <div id="page-content-wrapper">
                <Countries datas={this.state.datas}/>
                <Footer/>
            </div>
        );
    }
}

export default Home; 