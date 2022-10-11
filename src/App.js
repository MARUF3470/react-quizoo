import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home/Home';
import QuizField from './components/QuizField/QuizField';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        {
          path: '/',
          loader: () => {
            return fetch('quiz.json')
          },
          element: <Home></Home>
        },
        { path: '/statistics' },
        { path: '/blog' },
        {
          path: 'home/:quizID',
          loader: ({ params }) => {
            //console.log(params.quizID)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
          },
          element: <QuizField></QuizField>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;