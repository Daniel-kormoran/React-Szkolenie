import CountryCard from '../components/CountryCard'
import { Grid, Heading } from '@chakra-ui/react'
import { fetchCountries } from '../quary/fetchCountries'
import { useQuery } from '@tanstack/react-query'
import SkeletonGrid from '../components/SkeletonGrid'
import { useMemo } from 'react'


const HomePage = () => {

  const { data=[], isLoading, error, isLoaded } = useQuery({ queryKey: ['allCountries'], queryFn: fetchCountries });

console.log(data, isLoading,error, isLoaded)

const handleCountriesCard = () => {
  return data.map((country) => <CountryCard key={country.cca3} common={country.name.common} flag={country.flags.svg}
    name={country.name.official} capital={country.capital} info={country.flags.alt} />)
}
const memoCountriesCard = useMemo(handleCountriesCard, [data]);

  return (
    <div>

<Heading textAlign={"center"}>All Countries</Heading>

{!isLoading ?
(
<Grid padding={20}  
        templateColumns={{
          base: 'repeat(1, 1fr)', 
          sm: 'repeat(2, 1fr)',  
          md: 'repeat(3, 1fr)',   
          lg: 'repeat(4, 1fr)',   
          xl: 'repeat(5, 1fr)',  
        }} gap={6}>
        {memoCountriesCard}
      </Grid>
) : <SkeletonGrid/>
}
    </div>
  )
}

export default HomePage