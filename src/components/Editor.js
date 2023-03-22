import React from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/lint/css-lint";
import "codemirror/addon/lint/javascript-lint";
import "codemirror/mode/javascript/javascript";

//editor
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ editorTitle, lanuguage, value, onChange }) => {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        <p>{editorTitle}</p>
        {/* <button>O/C</button> */}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: lanuguage,
          lineNumbers: true,
          theme: "material",
          spellcheck: true,
          autocorrect: true
        }}
      />
    </div>
  );
};

export default Editor;
