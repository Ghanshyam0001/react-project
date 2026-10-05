import { Component } from "react";

class ErrorBoundries extends Component{
  constructor(props){
    super(props);
    this.state = { hasError:false, error:null,errorInfo:null}

  }
// getDrivedStateFromError automatic trigger when error and is react function
static getDerivedStateFromError(error){
    return{hasError:true, error:error}
  }
  // when user got error then we dont know when show error so use blow function and it same work above function when error occur then it show
  componentDidCatch(error,errorInfo)
  {
    console.log("Error Boundries",error,errorInfo);
  }

  render(){
    if(this.state.hasError){
      return(
        <>
       <h2>Something went wrong</h2>
       {this.props.fallback}
       {this.state.error.message}
        </>
        )
    }

    return this.props.children;
  }
}

export default ErrorBoundries