import { useParams } from "react-router-dom";
import { fetchCountries } from "../quary/FatchSingleCountry";
import { useQuery } from "@tanstack/react-query";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import Card from "../components/Card";

const CountryPage = () => {

    const {names} = useParams()
    const { data=[], isLoading} =
     useQuery({ queryKey: ['singleCountry'], queryFn: () => fetchCountries(names) });
     const country = data[0];

     console.log(country)
     
if(isLoading){
             return
            }

            const symbol = Object.keys(country.currencies);
            const currency = country.currencies[symbol];

            console.log(currency)


            const LangObj = Object.entries(country.languages);
            const language = LangObj.map(x => x[1]);
            const languages = language.join(", ");

            
            console.log(language)

  return (
    <div>
        <Card></Card>
      <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"
                  "nav  main2"`}
  gridTemplateRows={'20% 1fr 50% 50%'}
  gridTemplateColumns={'50% 1fr'}
 
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    {country.name.official}
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
  <Image
        src={country.coatOfArms.png}
        alt=''
        borderRadius='lg'
      />
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    {currency.name}
  </GridItem>

  <GridItem pl='2' bg='blue.300' area={'footer'}>
  {currency.symbol}
 
  </GridItem>

  <GridItem pl='2' bg='orange.600' area={'main2'}>
  <h2>{languages}</h2>
  </GridItem>
  
 
  

  
  
</Grid>
    </div>
  )
}



export default CountryPage


