import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import AppNav from "../../components/layout/AppNav";

function newEntry() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <AppNav />
      <main className="ml-[210px]">
        <h1 className="py-8 text-center text-5xl">Create New Journal Entry</h1>
        <section>
          <div className="editor">
            <Editor
              apiKey={process.env.TINYMCE_API_KEY}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>

          <button onClick={log}>Log editor content</button>
        </section>
      </main>
    </>
  );
}

export default newEntry;
