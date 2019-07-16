import React, {Component} from 'react';
import '../App.css';

const hitsPerPage = 20; 

class Countries extends Component{


    constructor(props){
        super(props);
        this.state={
            currentPageData:[],
            numberOfPages: 0,
            currentPage :1,
        };
    }

    onChangeData(){
        const datas = this.props.datas;
        const offset = (this.state.currentPage)*hitsPerPage;
        const currentDatas =datas.slice(offset,offset+hitsPerPage);
        this.setState({
            currentPageData: currentDatas
            });
    }

    renderCountry(){
        const datas = this.state.currentPageData;
        if(datas.length){
            return datas.map(country => (
                <div className="card m-3 p-2" >
                    {country.name}
                    <img src={country.flag} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{country.name}</h5>
                    </div>
                </div>
            )
            );
        }
    }

    render(){
        this.onChangeData();
        return(
            <div className="my-countries">
                {this.renderCountry()}
            </div>
        );
    }
}

export default Countries;