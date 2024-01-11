import { Box, styled } from '@mui/material'
import React from 'react'
import SearchInputElement from './SearchInputElement' 


const Header = () => {
  const StyleHeader = styled(Box)(({theme}) =>(
    {
      alignItems:"center",
      justifyContent:"center",
      display:"flex",
      minHeight:400,
      // backgroundImage: `url(${})`
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundColor:theme.palette.secondary.main ,
    }
  ))


  return (
    <>
      <StyleHeader>
        <SearchInputElement />
      </StyleHeader>
    </>
  )
}

export default Header

