import React from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote,  downvoteQuote} from '../actions/quotes';


const deleteQuote = (props) => {
  props.dispatch(removeQuote(props.quote))
}

const upVote = (props) => {
  props.dispatch(upvoteQuote(props.quote))
}

const downVote = (props) => {
  props.dispatch(downvoteQuote(props.quote))
}

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => upVote(props)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => downVote(props)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteQuote(props)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;

// export default QuoteCard;

export default connect(state => ({ quotes: state.quotes }))(QuoteCard); 