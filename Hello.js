import React from 'react';
import PropTypes from 'prop-types';

const Hello = (props) =>
{
  console.log(props);
  return <h1>Hello {props.name}!</h1>;
}

Hello.defaultProps=
{
name : "hitman"
};

Hello.propTypes ={
name : PropTypes.string
};
export default Hello; 


