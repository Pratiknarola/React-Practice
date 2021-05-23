import React from 'react';
import ReactDom from 'react-dom';


//CSS
import './index.css'


function App() {
    return <section className="booklist"> 
        <Book link="https://images-eu.ssl-images-amazon.com/images/I/61r-WomIz0L._AC_UL200_SR200,200_.jpg" title='One Arranged Murder' author='Chetan Bhagat' />
        <Book link='https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg' title='The Alchemist' author='Paulo Coelho' />
        <Book link='https://images-eu.ssl-images-amazon.com/images/I/71JZ0neAP1L._AC_UL200_SR200,200_.jpg' title='The Blue Umbrella' author='Ruskin Bond' />
        </section>

}


function Book(props) {
    return <article className="book">
        <img src={props.link} alt="" />
        <h1>{props.title}</h1>
        <h4 style={{color:'#617d98', fontSize:'0.75rem', margin:'0.25rem'}}>{props.author}</h4>
        <hr/>
    </article>
}


ReactDom.render(<App/>, document.getElementById("root"));


