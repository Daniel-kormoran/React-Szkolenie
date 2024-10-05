import axios from 'axios'
import { useEffect, useState } from 'react'
import CountryCard from './components/CountryCard'
import { Grid, Heading } from '@chakra-ui/react'


const App = () => {

  const [countries , setCountries] = useState([])
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    fetchCountries()
  },[])

  const fetchCountries = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(data);
    } catch (error) {
      console.log(error)
      throw new Error("Coś poszło nie tak")
    } finally {
      setLoading(false)
    }

  }
 
console.log(countries);

  return (
    <div>

<Heading>All Countries</Heading>

{!loading ?
(
<Grid padding={20}  
        templateColumns={{
          base: 'repeat(1, 1fr)', 
          sm: 'repeat(2, 1fr)',  
          md: 'repeat(3, 1fr)',   
          lg: 'repeat(4, 1fr)',   
          xl: 'repeat(5, 1fr)',  
        }} gap={6}>
        {countries.map((country) => <CountryCard key={country.cca3} flag ={country.flags.svg} 
        name={country.name.official} capital={country.capital} info={country.flags.alt} />)}
      </Grid>
) : "Wczytywanie"
}
    </div>
  )
}

export default App