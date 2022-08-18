import * as React from 'react';
import Header from './header';
import TabBar from './tabBar';
import Footer from './footer';
import './App.css';
import TemplatesPage from './templatesPage';

function App() {
  let [page, changePage] = React.useState("main")
  function updatePage(newPage){
    changePage(newPage);
  }
  if(page == "main"){
    return (
      <div className="App">
        <Header />
        <TabBar
          updatePage = {updatePage}
        />
        <Footer
          updatePage = {updatePage}
        />
      </div>
    );
  }else if(page == "templates"){
    return(
      <div className="App">
        <Header />
        <TemplatesPage
          updatePage = {updatePage} 
        />
        <Footer
          updatePage = {updatePage}
        />
      </div>
    );
  }
}

export default App;
