import * as React from 'react';
import './App.css';
import Header from './header';
import TabBar from './tabBar';
import Footer from './footer';
import TemplatesSelectorPage from './templatesSelectorPage';
import Questions from './questions';
import FileUpload from './fileUpload';

function App(props) {
  let [page, changePage] = React.useState("main")
  let answers = props.answers;
  
  function updatePage(newPage){
    changePage(newPage);
  }

  let dict = {"main": <TabBar updatePage = {updatePage} />, "templates": <TemplatesSelectorPage updatePage = {updatePage} />, "questions": <Questions updatePage = {updatePage} answers = {answers} />, "fileUpload": <FileUpload updatePage = {updatePage}/>};
  let middleSection = dict[page];

  return (
    <div className="App">
      <Header 
        updatePage = {updatePage}
      />
      {middleSection}
      <Footer
        updatePage = {updatePage}
      />
    </div>
  );
}

export default App;
