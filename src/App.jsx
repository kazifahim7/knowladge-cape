
import { useState } from 'react'
import './App.css'
import Header from './components/Headear/header'
import Blogs from './components/blogs/Blogs'
import BookMark from './components/bookmark/BookMark'
import Footer from './footer/Fotter'

function App() {
  const [BookMarks, setBookmarks] = useState([])
  const [time, setTime] = useState(0)

  const handleClick = blog => {
    const newBookMark = [...BookMarks, blog];
    setBookmarks(newBookMark)

  }
  const handleMark = (id, times) => {
    setTime(time + times);







    const remain = BookMarks.filter(item => item.id !== id);
    setBookmarks(remain)
  }


  return (
    <>

      <Header></Header>
      <div className='mb-4 md:flex gap-6'>
        <Blogs handleClick={handleClick}
          handleMark={handleMark}
        ></Blogs>
        <BookMark BookMarks={BookMarks}
          time={time}

        ></BookMark>
      </div>

      <div className='mb-1 mt-6'>
        <Footer></Footer>
      </div>


    </>
  )
}

export default App
