import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
        author="Pedro lucas" 
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi omnis, eligendi repudiandae nihil, veritatis quod natus a voluptatum molestiae libero totam similique aliquam. Voluptate quibusdam perspiciatis fuga deserunt iure dolorum."
      />
      <Post 
        author="Lucas" 
        content="Um novo post"
      />
        </main>
      </div>
    </div>
  )
}