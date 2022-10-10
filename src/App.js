import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout></Layout>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/statistics' },
        { path: '/blog' }
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