import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

// author: {avatar_url: "",name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: "https://avatars.githubusercontent.com/u/75871435?v=4",
      name: "Pedro Lucas",
      role: "Web Developer"
    },
    content:[
      {type: "paragraph", content: "Fala galera 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2025-04-18 11:00:00"),
  },
  {
    id: 2,
    author:{
      avatarUrl: "https://github.com/juninhopernambucano.png",
      name: "Juninho Pernambucano",
      role: "Atacante"
    },
    content:[
      {type: "paragraph", content: "Fala galeraaaa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2025-04-17 20:00:00"),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}