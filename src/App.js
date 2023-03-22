import React, { useState, useEffect } from "react";

//editors
import Editor from "./components/Editor";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>
            ${html}
          </body>
          <script>${javascript}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <div id="kodex-main">
      <div id="kodex-codesec">
        <Editor
          lanuguage="xml"
          editorTitle="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          lanuguage="css"
          editorTitle="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          lanuguage="javscript"
          editorTitle="JAVASCRIPT"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div id="kodex-codeout">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;
