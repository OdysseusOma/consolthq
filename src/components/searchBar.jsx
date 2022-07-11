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


export default function SearchAppBar() {
  const [notes, getNotes] = useState('');

  useEffect(()=>{
  getQuote()
  },[])

  const getQuote = async() => {
    axios.get(`http://localhost:4000/user`)
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
      <Search style = {{borderRadius: "18px", border: "0.7px solid #645F5F"}}>
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
          position: 'absolute', backgroundColor: '#C0C7CE', borderRadius: '15px'
        }}>{notes.filter((user)=>
          user.title.toLowerCase().includes(searchPop) ||
          user.article.toLowerCase().includes(searchPop) ||
          user.author_name.toLowerCase().includes(searchPop)
          ).map(
          (user) => (
            <li key={user.id} style={{listStyle:'none', padding: '3px'}}>
              <Link to={`/blog/${user._id}`}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column' 
                }}>
                  <p>{user.title}</p>
                  <p style={{color: '#243977', fontSize: '13px', display: 'flex', justifyContent: 'flex-end'}}>{user.author_name}</p>
                </div>
              </Link>
            </li>
              )
        )}</div>}
    </div>
  );
}
