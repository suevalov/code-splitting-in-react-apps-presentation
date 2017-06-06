import React, { Component } from 'react';

import { Link } from 'spectacle';

class Suevalov extends Component {

  renderMe() {
    const styles = {
      'margin': '10px auto',
      'width': '130px',
      'height': '130px',
      'borderRadius': '50%'
    };
    return (
      <div style={{ display: 'inline-block', width: '400px' }}>
        <img src={this.props.photo} style={styles} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderMe()}
        <div>
          <Link textColor="white" href="http://suevalov.com" style={{ fontSize: '1em' }} target="__blank">
            Alex Suevalov
          </Link>
        </div>
      </div>
    );
  }

}

Suevalov.propTypes = {
  photo: React.PropTypes.string.isRequired
};

export default Suevalov;
