import axios from "axios";
import { FaSun, FaMoon } from "react-icons/fa";
import { BASE_URL } from "../../constants/url";
import { ArticleForm } from "../ArticleForm/ArticleForm";

export function Header({ theme, onThemeToggle, toggleModal, showModal, articles, setArticles, selectedArticle, fetchArticles}) {


    const addArticle = async (article) => {
        if(selectedArticle === null){
        try {
          const response = await axios.post(`${BASE_URL}`, article);
          setArticles([...articles, response.data]);
          toggleModal();
        } catch (error) {
          console.log("Error adding article.");
          console.log(error.response);
        }
      }else{
        try {
          const response = await axios.put(`${BASE_URL}/${selectedArticle.id}`, article)
          setArticles([...articles, response.data]);
          toggleModal();
        } catch (error) {
          console.log("Error uptading article.");
          console.log(error.response);
        }
      }
      fetchArticles()
      };
      






  return (
    <header className="w-1/2 flex justify-between items-center py-6 px-4 bg-slate-300 text-black dark:bg-gray-800 dark:text-gray-400" >
      
      <button
        className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        onClick={toggleModal}
      >
        New Article
      </button>

      <h1 className="text-3xl font-bold">Devnology</h1>
      
      <button
        className="bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-4 rounded-lg flex items-center"
        onClick={onThemeToggle}
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
        <span className="ml-2">{theme === "dark" ? "Light" : "Dark"} mode</span>
      </button>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none backdrop-blur ">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white dark:bg-gray-800 border-0 rounded-lg shadow-lg outline-none focus:outline-none ">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font-semibold">{selectedArticle ? "Edit Article" : "New Article"}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={toggleModal}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex flex-col">
                <ArticleForm onSubmit={addArticle} selectedArticle={selectedArticle} toggleModal={toggleModal} />
                
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
