import { useState } from "react";
import  ReactMarkdown  from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeKatex  from 'rehype-katex'

const Main = () =>{ 
  const [ text , setText ] = useState("# Initial Title text")

  const handleText = (event) =>{  
    setText( event.target.value )
    console.log(text);
  }

  return <div id="main">

    <div className="editor">
      <Navbar text={"EDITOR"}/>
      <textarea name="text" id="text" cols="80" rows="30" onChange={handleText} defaultValue={ text }></textarea>
    </div>

    <div className="preview">
      <Navbar text={"PREVIEW"}/>
      <div className="preview-text">
      <ReactMarkdown children={text} rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkGfm ]} skipHtml={true}>
      </ReactMarkdown>
      </div>
    </div>

  </div>
}


const Navbar = ( props ) =>{ 
  return ( <div className="navbar">
    <p>{ props.text }</p>
  </div> );
}
export default Main; 
