import {Card, Grid, Skeleton, SkeletonText } from "@chakra-ui/react"

const SkeletonGrid = () => {

    const items = Array.from(Array(12)).map((x,index) => (
        <Card maxW='sm' key={index} padding='6' boxShadow='lg' bg='white'>
        <Skeleton height={200}/>
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Card> 
    ))

  return (
    <Grid 
        padding = {{
          xl: 20,
          md: 5
        }}
        templateColumns={{
          base: 'repeat(1, 1fr)', 
          sm: 'repeat(2, 1fr)',  
          md: 'repeat(3, 1fr)',   
          lg: 'repeat(4, 1fr)',   
          xl: 'repeat(5, 1fr)',  
        }} gap={6}>
       {items}
      </Grid>
  )
}

export default SkeletonGrid
