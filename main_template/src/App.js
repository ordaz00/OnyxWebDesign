import * as React from 'react';
import './App.css';
import Header from './header';
import TabBar from './tabBar';
import Footer from './footer';
import TemplatesSelectorPage from './templatesSelectorPage';
import Questions from './questions';

function App() {
  let [page, changePage] = React.useState("main")
  
  function updatePage(newPage){
    changePage(newPage);
  }

  let dict = {"main": <TabBar updatePage = {updatePage} />, "templates": <TemplatesSelectorPage updatePage = {updatePage} />, "questions": <Questions updatePage = {updatePage} />};
  let middleSection = dict[page];

  return (
    <div className="App">
      <Header />
      {middleSection}
      <Footer
        updatePage = {updatePage}
      />
    </div>
  );
}

export default App;
