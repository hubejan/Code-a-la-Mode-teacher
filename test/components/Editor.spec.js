import React from 'react';
import { shallow } from 'enzyme';
import AceEditor from 'react-ace';
import renderer from 'react-test-renderer';
import Editor from '../../app/components/Editor';

import changeEditorImport from '../../app/actions/editor-actions';

describe('Editor component', () => {

  const component = shallow(<Editor changeEditor={changeEditorImport} />);

  it('should receive a changeEditor function in props', () => {
    expect(component.instance().props.changeEditor).toBe(changeEditorImport);
  });

  it('should display the AceEditor', () => {
    const tree = renderer
      .create(
        <div>
          <AceEditor
            // mode="javascript"
            // theme="solarized_dark"
            // onChange={changeEditor}
            // name="UNIQUE_ID_OF_DIV"
            // editorProps={{ $blockScrolling: true }}
          />
        </div>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
