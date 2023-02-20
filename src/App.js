import axios from 'axios';
import { useEffect, useState } from 'react';
import { ArticleList } from './components/ArticleList/ArticleList';
import { Header } from './components/Header/Header';
import { BASE_URL } from './constants/url';



function App() {

  const [theme, setTheme] = useState(null)
  const [articles, setArticles] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);




  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }, [])
  

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  useEffect(()=>{
    fetchArticles()
  },[])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleModal = () => {
    if(selectedArticle !== null && showModal === true){
      setSelectedArticle(null)
      setShowModal(!showModal);
    }else{
    setShowModal(!showModal);
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`)
      console.log(response.data)
      setArticles(response.data)
      
    } catch (error) {
      console.log("Error fecthing articles.")
      console.log(error.response)
      
    }
  }

  const handleDeleteArticle = async (articleId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${articleId}`)
      console.log(response.data)
      setArticles(articles.filter(article => article.id !== articleId))
    } catch (error) {
      console.log(`Error deleting article with ID ${articleId}`)
      console.log(error.response)
    }
    fetchArticles()
  }

  const handleEditArticle = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };
  
  console.log(selectedArticle)


  






  return (
    <div className=" bg-slate-300	 dark:bg-gray-800 h-screen w-screen flex flex-col justify-start gap-20 p-10 items-center">
      <Header theme={theme} 
      onThemeToggle={handleThemeSwitch} 
      toggleModal={toggleModal} 
      showModal={showModal}
      articles={articles}
      setArticles={setArticles}
      selectedArticle={selectedArticle}
      setSelectedArticle={setSelectedArticle}
      fetchArticles={fetchArticles}/>

      <ArticleList articles={articles}
      onDeleteArticle={handleDeleteArticle}
      onEditArticle={handleEditArticle} />

    </div>
  );
}

export default App;
