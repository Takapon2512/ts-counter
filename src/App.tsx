import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import styled from './App.module.css';
import Button from '@mui/material/Button';
import { decrement, increment, incrementByAmount } from './Store/CounterSlice';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

function App() {
  const count: number = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState('0')



  return (
    <>
      <div className="App">
        <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mb: '24px'
        }}>
          <h1 className={styled.center}>Count: {count}</h1>
          <TextField 
          id="standard-basic" 
          label="増加量を入力してください" 
          variant="standard" 
          sx={{ mb: '24px', width: '200px', m: 'auto' }} 
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setIncrementAmount(e.target.value)}
          value={incrementAmount} 
          />
        </Box>
        <div className={styled.buttons}>
          <Button size='large' variant='contained' sx={{ mr: '12px' }} onClick={() => dispatch(increment())}>up</Button>
          <Button size='large' variant='contained' sx={{ mr: '12px' }} onClick={() => dispatch(decrement())}>down</Button>
          <Button size='large' variant='contained' onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加</Button>
        </div>
      </div>
    </>
    );
}

export default App;
