import * as React from 'react';
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginLeft: 0,
  display: 'flex',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    maxWidth: '318px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const mainSearch = {
  borderRadius: "18px", 
  border: "0.7px solid #645F5F"
}


export default function SearchAppBar() {
  const [notes, getNotes] = useState('');

  useEffect(()=>{
  getQuote()
  },[])

  const getQuote = async() => {
    axios.get(`https://consoltserver.herokuapp.com/user`)
    .then(res => {
      const myList = res.data
      getNotes(myList)
    })
    .catch(err => {
      console.log(err)
    })
  }



  const [searchPop, setSearchPop] = useState("");
  

  return (
    <div>
      <Search className='mainSearchBar' style = {mainSearch}>
      <SearchIconWrapper>
          <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}

          // filter through database on change
          onChange={(e) => setSearchPop(e.target.value)}
      />
      </Search>
      
        {searchPop === ""? 
        null :
        <div className='searchPopStyle'
        style={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: '4',
          position: 'absolute', backgroundColor: '#DFE3E8', borderRadius: '15px'
        }}>{notes.filter((user)=>
          user.title.toLowerCase().includes(searchPop) ||
          user.article.toLowerCase().includes(searchPop) ||
          user.author_name.toLowerCase().includes(searchPop)
          ).map(
          (user) => (
            <li key={user.id} style={{listStyle:'none', padding: '3px', zIndex:'5', gap: '1rem'}}>
              <Link to={`/blog/${user._id}`}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '1px dotted black',
                  borderBottom: '1px dotted black',
                  minHeight: '60px',
                  minWidth: '270px',
                  margin: 'auto',
                  justifyContent: 'center',
                  backgroundColor: '#ddd9ff',

                }}>
                  <p style={{paddingLeft: '1rem', color: 'black'}}>{user.title}</p>
                  <p style={{color: '#243977', fontSize: '13px', display: 'flex', justifyContent: 'flex-end', paddingRight: '0.5rem'}}>Author: {user.author_name}</p>
                </div>
              </Link>
            </li>
              )
        )}</div>}
    </div>
  );
}
