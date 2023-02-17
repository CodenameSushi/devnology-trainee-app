

export function ArticleList({ articles, onEditArticle, onDeleteArticle }) {
    return (
      <div className="my-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-400">My Articles:</h2>
        <ul className="list-disc list-inside">
          {articles.map(article => (
            <li key={article.id} className="text-indigo-700 dark:text-indigo-500 flex justify-between items-center mb-2">
              <div className="bg-slate-300   dark:bg-gray-800 rounded-lg p-4 backdrop-opacity-40 hover:drop-shadow-2xl shadow-md hover:shadow-blue-500/20  h-20 w-full">
                <a href={`${article.url}`} target="_blank" rel="noopener">
                  <h3 className="text-lg font-bold hover:text-indigo-400">{article.title}</h3>
                </a>
                <p className="text-gray-800 dark:text-gray-500">{article.author}</p>
              </div>
              <div>
                <button onClick={() => onEditArticle(article)} className="m-4 p-1 w-16 rounded-md text-black bg-slate-500 hover:bg-slate-700">Edit</button>
                <button onClick={() => onDeleteArticle(article.id)} className="m-4 p-1 w-16 rounded-md text-black bg-red-700 hover:bg-red-800 ">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  