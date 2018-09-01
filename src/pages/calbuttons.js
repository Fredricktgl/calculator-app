import React from 'react';
import Button from '@material-ui/core/Button';


class calbuttons extends React.Component {
  render() {
    const {numberSubmit , operatorSubmit} = this.props
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('C')} >C</Button>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('Del')} >Del</Button>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('()')} >( )</Button>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('+')} >+</Button>
        <br />

        <Button variant="contained" color="primary" onClick={() => numberSubmit(1)} >1</Button>
        <Button variant="contained" color="primary" onClick={() => numberSubmit(2)} >2</Button>
        <Button variant="contained" color="primary" onClick={() => numberSubmit(3)} >3</Button>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('-')} >-</Button>
        <br />

        <Button variant="contained" color="primary" onClick={() => numberSubmit(4)} >4</Button>
        <Button variant="contained" color="primary" onClick={() => numberSubmit(5)} >5</Button>
        <Button variant="contained" color="primary" onClick={() => numberSubmit(6)} >6</Button>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('*')} >X</Button>
        <br />

        <Button variant="contained" color="primary" onClick={() => numberSubmit(7)} >7</Button>
        <Button variant="contained" color="primary" onClick={() => numberSubmit(8)} >8</Button>
        <Button variant="contained" color="primary" onClick={() => numberSubmit(9)} >9</Button>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('/')} >/</Button>
        <br />

        <Button variant="contained" color="primary" onClick={() => numberSubmit('.')} >.</Button>
        <Button variant="contained" color="primary" onClick={() => numberSubmit(0)} >0</Button>
        <Button variant="contained" color="primary" onClick={() => operatorSubmit('-/+')} >-/+</Button>
        <Button variant="contained" color="secondary" onClick={() => operatorSubmit('=')} >=</Button>
        <br />
      </div>
    )
  }
}

export default calbuttons