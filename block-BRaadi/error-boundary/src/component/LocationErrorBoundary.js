import React from "react";

class LocationErrorBoundary extends React.Component{
    state={hasError:false}
    static getDerivedStateFromError(error){
        return {hasError:true}
    }

    render (){
        if(this.state.hasError){
            return <h2>Something Went Wrong! Reload the page</h2>
        }
        return this.props.children
    }
}

export default LocationErrorBoundary