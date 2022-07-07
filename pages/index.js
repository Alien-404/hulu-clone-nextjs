import Results from '../src/components/Results';
import Layout from '../src/Layout';
import requests from '../src/utils/requests';

export default function Home({ results }) {
  return (
    <Layout title='Hulu Next JS'>
      <Results results={results} />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const genre = query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
