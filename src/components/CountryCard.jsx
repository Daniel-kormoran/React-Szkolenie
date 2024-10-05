import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, Image, Heading, Text, Divider, ButtonGroup, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const CountryCard = ({ common ,name, flag ,capital = "Nie podano", info}) => {



return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={flag}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>
          {info}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
         {capital}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
         <Link to ={`/country/${common}`}>
         Detail
         </Link>
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
  
}
CountryCard.propTypes = {
  common : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  capital:PropTypes.array,
  flag:PropTypes.string.isRequired,
  info:PropTypes.string
  
}

export default CountryCard

