/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from "react";
import { useQuery, } from "react-query";

type PostsProps ={};

const Posts: FC<PostsProps> = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/photos').then(res =>
      res.json()
    )
  )
  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Something went wrong!!!</div>

  return (
    <div className="home__container">
      {
        data.slice(0, 10).map((item: any, index: any) => (
          <div className="list__item" key={index}>
            <img src={item.url} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Posts;