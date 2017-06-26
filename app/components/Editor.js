// @flow
import React, { Component } from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

class Editor extends Component {
  props: {
    changeEditor: () => void
  };

  render() {
    const { changeEditor } = this.props;

    return (
      <AceEditor
        mode="javascript"
        theme="solarized_dark"
        onChange={changeEditor}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default Editor;
