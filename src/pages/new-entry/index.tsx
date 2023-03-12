import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import AppNav from "../../components/layout/AppNav";
import LoadingWidget from "../../components/widgets/LoadingWidget";

function NewEntry() {
  const [isLoading, setIsLoading] = useState(true);
  const editorRef = useRef(null);

  const handleEditorInit = () => {
    console.log("Editor initialized");
    setIsLoading(false);
  };

  const handleSaveEntry = () => {
    const content = (editorRef.current as any)?.getContent();
    console.log(content);
  };

  return (
    <>
      <AppNav />
      <main className="ml-[210px]">
        <h1 className="py-8 text-center text-5xl">Create New Journal Entry</h1>
        <section>
          {isLoading && <LoadingWidget loadingText="Loading Editor..." />}

          <div
            className={`editor-container m-auto max-w-[850px] px-4 ${
              isLoading ? "hidden" : ""
            }`}
          >
            <Editor
              apiKey={process.env.TINYMCE_API_KEY}
              onInit={handleEditorInit}
              initialValue="
              <h1>Prayer Journal Entry Title</h1>
              <p>Start writing your new entry here...</p>
              "
              init={{
                height: 400,
                max_height: 500,
                width: "100%",
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
                  "link bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist | " +
                  " | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              // Set the ref to get a reference to the editor instance
              // that can be used later to get the content
              onEditorChange={(content, editor) => {
                (editorRef.current as any) = editor;
              }}
            />
            <button
              className="mt-2 rounded-md bg-blue-600 p-4 py-2"
              onClick={handleSaveEntry}
            >
              Save Entry
            </button>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hidden {
          display: none;
        }
      `}</style>
    </>
  );
}

export default NewEntry;
