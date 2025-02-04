import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

class QuoteForm extends Component {

  state = {
    id: uuid(),
    author: '',
    content: '',
    votes: 0
  }

  handleOnChange = event => {
    // Handle Updating Component State
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
    event.preventDefault();
    this.props.addQuote(this.state)
    this.setState({
      id: uuid(),
      author: '',
      content: '',
      votes: 0
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        className="form-control"
                        value={this.state.content}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default" >Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  const mapStateToProps = state => {
    return {
      quotes: state.quotes
    }
  }

//add arguments to connect as needed
// export default connect()(QuoteForm);

export default connect(mapStateToProps, (dispatch) => ({
  ...bindActionCreators({addQuote}, dispatch), dispatch
}))(QuoteForm);

// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: () => { dispatch(addRestaurant()) }
//   }
// }

// // export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput); 

// //connect this component by wrapping RestaurantInput below
// // export default connect(state => ({ restaurants: state.restaurant }), {addRestaurant} )(RestaurantInput)


// export default connect(mapStateToProps, (dispatch) => ({
//   ...bindActionCreators({addRestaurant}, dispatch), dispatch
// }))(RestaurantInput);

// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => { dispatch(addItem()) }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App); 