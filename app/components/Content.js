var React = require('react');
var PrimaryContent = require('./layout/PrimaryContent');
var SecondaryContent = require('./layout/SecondaryContent');

class Content extends React.Component {
  render() {
    return (
      <main>
        <PrimaryContent />
        <SecondaryContent />
      </main>
    );
  }
}

module.exports = Content;