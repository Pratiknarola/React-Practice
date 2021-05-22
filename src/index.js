import React from 'react';
import ReactDom from 'react-dom';


//CSS
import './index.css'


function App() {
    return <section className="booklist"> 
        <Book/>
        
        </section>

}


function Book(url, title, author) {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
        <hr/>
    </article>
}

function Image(link) {
    return <img src="https://images-eu.ssl-images-amazon.com/images/I/61r-WomIz0L._AC_UL200_SR200,200_.jpg" alt="" />
}

const Title = (text) => <h1>One Arranged Murder</h1>

function Author(name) {
    return <h4 style={{color:'#617d98', fontSize:'0.75rem', margin:'0.25rem'}}>Chetan Bhagat</h4>
}


ReactDom.render(<App/>, document.getElementById("root"));


