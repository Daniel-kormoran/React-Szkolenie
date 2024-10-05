import axios from 'axios'


export const fetchCountries = async (country) => {

    console.log(country);

    const { data , status } = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    if(status !== 200) {
        throw new Error ("Network response was not ok")
    }
 return data;
}
