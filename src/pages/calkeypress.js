import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class calkeypress extends React.Component {
  render() {
    const {keyPress} = this.props
    return(
      <KeyboardEventHandler 
          handleKeys={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.',
                        '+',  'shift + =', '-', 
                        'x', 'shift + X',  'shift + 8', '*',
                        '/', '=', 'enter', 'c', 'shift + c', 'backspace', 
                        'shift + 9', 'shift + 0', '(', ')']} 
          onKeyEvent={ (key) => keyPress(key) }/>
    )
  }
}

export default calkeypress