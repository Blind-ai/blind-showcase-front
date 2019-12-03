import React from 'react';
import NewsComponent from "../../components/News/NewsComponent";
import './News.css'


function News() {
    return (
        <div style={{marginTop: '100px'}}>
            <h1 style={{marginBottom: '50px'}}><center>What's new about Blind ?</center></h1>
            <div  className='solutionsContainer'>
                <NewsComponent text={'Why you should preserve your grandparents'}/>
                <NewsComponent text={'A new AI'}/>
                <NewsComponent text={'Blind at VivaTech Paris'}/>
            </div>
        </div>
    )
}

export default News;