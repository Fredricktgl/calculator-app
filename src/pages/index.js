import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Calbuttons from '../pages/calbuttons'
import Calkeypress from '../pages/calkeypress'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: [],
      bracket: "("
    };
  };

  render() {
    const { classes } = this.props;
    const { calculation, bracket } = this.state;
    const elementPos = calculation.length

    const keyPress = (keyPress) => {
      if (keyPress === 'shift + =' || keyPress === '+') {
        operatorSubmit('+')
      } else if (keyPress === 'enter' || keyPress === 'shift + =' || keyPress === '=') {
        operatorSubmit('=')
      } else if (keyPress === 'c' || keyPress === 'shift + c') {
        operatorSubmit('C')
      } else if (keyPress === 'x' || keyPress === 'shift + X' || keyPress === 'shift + 8' || keyPress === '*') {
        operatorSubmit('*')
      } else if (keyPress === '-' || keyPress === '/') {
        operatorSubmit(keyPress)
      } else if (keyPress === '.') {
        numberSubmit(keyPress)
      } else if (keyPress === 'backspace') {
        operatorSubmit('Del')
      } else if (keyPress === 'shift + 9' || keyPress === 'shift + 0' || keyPress === '(' || keyPress === ')') {
        operatorSubmit('()')
      } else {
        numberSubmit(parseInt(keyPress, 10))
      }
    }

    const numberSubmit = (e) => {
      if (e === '.') {
        let lastNumPos
        
        for (let i=elementPos-1; i >= 0; i--) {
          if (calculation[i] === '/' || calculation[i] === '*' || calculation[i] === '+' ||
              calculation[i] === '-' || calculation[i] === '-(' || calculation[i] === ')'){

              lastNumPos = elementPos - i - 1
              break
          }
        }

        let sliceStartPos = elementPos - lastNumPos
        const lastNum = calculation.slice(sliceStartPos, elementPos)
        const find = lastNum.find((find) => {
          return find === '.'
        })

        if (find === undefined && lastNum.join('').includes('.') === false ) {
          if (calculation[sliceStartPos-1] === '/' || calculation[sliceStartPos-1] === '*' || calculation[sliceStartPos-1] === '+' ||
              calculation[sliceStartPos-1] === '-' || calculation[sliceStartPos-1] === '-(' || calculation[sliceStartPos-1] === ')' ||
              calculation.length === 0) {
              Number.isInteger(parseInt(calculation[sliceStartPos], 10)) ? 
                this.setState(prevState => ({ calculation: [...prevState.calculation, e] })) : 
                this.setState(prevState => ({ calculation: [...prevState.calculation, 0, e] }));
            } else {
              this.setState(prevState => ({ calculation: [...prevState.calculation, e] }));
            }
        }
      } else {
        this.setState(prevState => ({ calculation: [...prevState.calculation, e] }));
      }
    }

    const operatorSubmit = (o) => {
      let lastElement = calculation[elementPos-1]

      if (o === 'C') {
        this.setState({ calculation: [] });
      } else if(o === '=') {
        this.setState({ calculation: [eval(calculation.join(''))] });
      } else if(o === '-/+') {
        if (calculation[0] === '-(') {
          this.setState({ calculation: [calculation.slice(1, calculation.length-1)] })
        } else {
          this.setState(prevState => ({ calculation: ['-(', ...prevState.calculation, ')'] }));
        }
      } else if (o === '+' && lastElement !== '+') {
        this.setState(prevState => ({ calculation: [...prevState.calculation, o] }));
      } else if (o === '-' && lastElement !== '-') {
        this.setState(prevState => ({ calculation: [...prevState.calculation, o] }));
      } else if (o === '/' && lastElement !== '/') {
        this.setState(prevState => ({ calculation: [...prevState.calculation, o] }));
      } else if (o === '*' && lastElement !== '*') {
        this.setState(prevState => ({ calculation: [...prevState.calculation, o] }));
      } else if (o === 'Del') {
        this.setState({ calculation: calculation.slice(0, -1) })
      } else if (o === '()') {
        if (bracket === "(") {
          this.setState(prevState => ({ calculation: [...prevState.calculation, "("] }));
          this.setState({ bracket: ")"})
        } else {
          this.setState(prevState => ({ calculation: [...prevState.calculation, ")"] }));
          this.setState({ bracket: "("})
        }
      }
    }

    return (
      <div className={classes.root}>
        <Typography variant="display1" gutterBottom>
          Just a simple calculator app
        </Typography>
        <Typography variant="headline" gutterBottom>
          Powered by React.js & Material-UI
        </Typography>
        <Typography variant="headline" gutterBottom>
          {calculation.length === 0 ? 0 : calculation}
        </Typography>
          <Calkeypress keyPress={keyPress} />
          <Calbuttons numberSubmit={numberSubmit} operatorSubmit={operatorSubmit} />
        <br />

        <Typography gutterBottom>
          P.S: Keyboard commands enabled, try typing 1 + 1 = to get the result
        </Typography>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));