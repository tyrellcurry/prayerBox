import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Oval } from "react-loading-icons";
import AppNav from "../../components/layout/AppNav";

function newEntry() {
  const [isLoading, setIsLoading] = useState(true);

  const handleEditorInit = () => {
    console.log("Editor initialized");
    setIsLoading(false);
  };

  return (
    <>
      <AppNav />
      <main className="ml-[210px]">
        <h1 className="py-8 text-center text-5xl">Create New Journal Entry</h1>
        <section>
          {isLoading && (
            <div>
              <Oval />
            </div>
          )}

          <div
            className={`editor-container m-auto max-w-[800px] ${
              isLoading ? "hidden" : ""
            }`}
          >
            <Editor
              apiKey={process.env.TINYMCE_API_KEY}
              onInit={handleEditorInit}
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
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
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>

          <button>Log editor content</button>
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

export default newEntry;
