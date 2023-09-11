import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react"; //1. Import TinyMCE Editor

const TextArea = () => {
    const [content, setContent] = useState("");
    const editorRef = useRef(null);

    const handleClick = () => {
        //const htmlDecode = (input) => {
        //    var e = document.createElement('div');
        //    e.innerHTML = input;
        //    console.log(e);
        //    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        //}
    //
        //const cc = {
        //    content: <div dangerouslySetInnerHTML={{ __html: htmlDecode(content) }} />,
        //    try2: {parse{content)}
        //}
        //console.log(cc.content);


        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }


    //const stringToHTML = window.tinymce
    //.get("content")
    //.getContent({ format: "html" }); 
    ////Set up a constant that gets the TinyMCE text area content for use in the CMS demo
    }

    //Min saga  

    

    return ( 
        <div id="EditorWrapper">
            <Editor
                tinymceScriptSrc={process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"}
                apiKey="your-api-key"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onInit={(evt, editor) => editorRef.current = editor}
                init={{
                    height: 300,
                    plugins: [
                    "a11ychecker advcode advlist advtable anchor autocorrect autosave editimage image link linkchecker lists media mediaembed pageembed powerpaste searchreplace table template tinymcespellchecker typography visualblocks wordcount",
                    ],
                    toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify lineheight | removeformat | link ",
                    menubar: false,
                    block_formats: "Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3",
                    content_style: `
                        body {
                            font-family: Arial, sans-serif;
                            margin: 12px;
                        }
                        h1, h2, h3, p {
                            color: #4D66CB;
                            margin: 10px;
                        }
                        `,
                }}
            />
            <button onClick={handleClick()}></button>
        </div>
    );
}

export default TextArea;