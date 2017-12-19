import React from 'react';

export function CustomTextInput() {
  let textInput = null;
  function HandleClick() {
    textInput.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={(input) => {textInput = input; }}/>
      <input
        type="button"
        value="Show focus"
        style={{background: '#2196F3'}}
        onClick={HandleClick}/>
    </div>
  );
}

function CustomTextInput2(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

export class ParentCustomTextInput2 extends React.Component {
  render() {
    return (
      <CustomTextInput2
        inputRef={el => this.inputElement = el}
      />
    );
  }
}