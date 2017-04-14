var React = require('react');

class PrimaryContent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      curValue: this.props.startingValue
    };
  }
  componentDidMount() {
    setInterval(function(){
      this.setState({
        curValue: this.state.curValue + 1
      });
    }, 2000);
  }
  render () {
   return(
      <section>
        <h2>{this.state.curValue}</h2>  
      </section>
    );
  } 
}

PrimaryContent.defaultProps = {
  startingValue: 20
}

module.exports = PrimaryContent;