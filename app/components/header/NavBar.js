var React = require('react');

class NavBar extends React.Component{
  render(){
    var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    var navLinks = pages.map(function(page){
      return (
        <li><a href={'/' + page}>{page}</a></li>
      );
    });

    return (
      <nav>
        <ul>{navLinks}</ul>
      </nav>
    ); 
  }
}

module.exports = NavBar;