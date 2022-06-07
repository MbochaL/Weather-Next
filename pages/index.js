import Head from 'next/head';
import SearchBox from '../components/SearchBox';
import DefaultCitys from '../components/DefaultCitys';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wheather App - Next</title>
      </Head>

      <div className="home">
        <div className="container"></div>
          <SearchBox placeholder="Buscar una Localidad"/>
          <DefaultCitys/>
        </div>
        
    </div>
  )
}
