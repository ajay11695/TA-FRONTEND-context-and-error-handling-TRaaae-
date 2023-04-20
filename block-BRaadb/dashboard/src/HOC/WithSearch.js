import React from "react"

function withSearch(Comp){

    return class Enhanched extends React.Component{
         state={
            searchTerm:''
         }
         handleChange = ({ target: { value } }) => {
            this.setState({ searchTerm: value });
          };
          render(){
            return <Comp handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
          }
    }
 

}

export default withSearch