import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const endpoint = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';

// export async function getServerSideProps(context: any) {
//   const result = await getPokemonsList();

//   console.log('----> before sleep');
//   await new Promise((resolve) => {
//     setTimeout(resolve, 5000);
//   });
//   console.log('----> after sleep: ', result);

//   return {
//     props: {
//       data: result,
//     }, // will be passed to the page component as props
//   }
// }

export default function Home(props: any) {
  // const { data } = props;
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    getPokemonsList().then((result) => {
      setTimeout(() => {
        setData(result);
      }, 5000);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/users/me">
          Me
        </Link>
        {/* {
          data?.users?.map?.((user: any) => {
            return (
              <div key={user.name}>
                {user.name}
              </div>
            )
          })
        } */}
        {data === null ? (
          <div>Loading...</div>
        ) : (
        data.map?.((pokemon: any) => {
          return (
            <div key={pokemon.name}>
              {pokemon.name}
            </div>
          )
         })
        )}
        <div>

        </div>
      </main>
    </>
  )
}

async function getPokemonsList() {
  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => data.results);
}
