var React = require('react');
var Menu = require('./NavBar');

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Aquí va el logo</h1>
        <Menu />
      </header>
    );
  }
}

module.exports = Header;