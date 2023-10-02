import React from "react";

class Search_Input extends React.Component{
    /*
    // replace with an inline function onChange
    onInputChange(event){
        let s = event.target.value
        console.log(s) //test
    }
    */
   // initialize the state value
state = {entry:''}

   // onsubmit form

onSubmit = (event)=>(
    event.preventDefault()
    this.this.props..onsearchsubmit(this.state.entry)
)


    render(){
        return(
        <div className="ui segment" style={{margin:'2em'}}>
            <form className="ui form">
                <div className="ui field">
                    <div className="ui massive icon input">
                        <input type="text" placeholder="Type Your Search..." onChange={(event)=>(this.setState({entry:event.target.value}))}
                        value={this.state.entry}></input>
                        <i className="ui icon search"></i>

                    </div>

                </div>

            </form>

        </div>
        )
    }
}
export default Search_Input