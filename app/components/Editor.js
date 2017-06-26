// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <AceEditor
          mode="javascript"
          theme="solarized_dark"
          onChange={changeEditor}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    );
  }
}

export default Editor;
