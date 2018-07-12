import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

var Person = {
  fullName: 'Arnaldo',
  street: '123 Fake St',
  city: 'Boston, MA 02118',
  fl: 33177
}
var fromPerson = {
  fullName: 'Jordan',
  street: '123 Fake St',
  city: 'San Francisco CA 94101',
  fl: 33164
}

function DataLabel({label}) {
  var {fullName, street, city, fl} = label;
  return (
    <div className="label">
      <span className="full-name">{fullName}</span>
      <br/>
      <span className="street">{street}</span>
      <br/>
      <span className="city">{city}</span>
      <span className="fl">FL: {fl}</span>
    </div>
  );
}
function Stamp(){
  return <div className="stamp">Stamp</div>
}
DataLabel.propTypes = {
  label: PropTypes.shape({
    name: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    fl: PropTypes.number.isRequired
  }).isRequired
}

function DatePerson({person, from}) {
  return (
    <div className="container">
      <div className="from">
        <DataLabel label={person} />
      </div>
      <div className="to">
        <DataLabel label={from} />
      </div>
      <Stamp />
    </div>
  );
}

ReactDOM.render(
  <DatePerson person={Person} from={fromPerson}/>, document.querySelector('#root'));