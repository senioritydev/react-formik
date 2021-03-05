/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Posts from './Posts';

type HomeProps ={};

const queryClient = new QueryClient();

const Home: FC<HomeProps> = () => {
  const [loadData, setLoadData] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setLoadData(true)}>fetch data</button>
      {
        loadData &&  <Posts />
      }
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Home;