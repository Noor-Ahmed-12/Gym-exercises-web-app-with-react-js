import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography, TextField, Button} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from '../components/HorizontalScrollBar';


const SearchExercises = ( { bodyPart, setBodyPart, setExercises })  => {
  const [search, setSearch] = useState('');

  // fetching exercise cateogries
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData =  async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  }, []);
  


  const handleSearch = async () =>{
    if (search) {
      const exercisesData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
  }

  return (
    <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center" color="#b2becd">
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
    
        <TextField
      sx={{
        input: {fontWeight: '700', borderRadius: '4px', border: 'none'},
        width: {lg:'800px', sm: '350px'},
        // borderRadius: '40px',
        backgroundColor:'#fff'
      }}
      height="76px"
      value={search}
      placeholder="Search Exercises"
      onChange={(e)=> setSearch(e.target.value.toLowerCase())}
      type="text" /> 
        
        <Button className="search-btn" 
        sx={{
          backgroundColor: '#ffb700',
          color: '#fff',
          textTransform: 'none',
          // borderRadius: '40px',
          width: {lg: '175px', sm:'80px'},
          fontSize: {lg: '20px',  sm:'14px'},
          height: '56px',
          position: 'absolute',
          right: '0',
        }} onClick={handleSearch}>
          Search</Button>
      </Box>
        <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
        </Box>
    </Stack>
  )
}

export default SearchExercises