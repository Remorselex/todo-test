import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, SelectChangeEvent } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, setFilters } from '../../store/appSlice/appSlice';
import { centeredDiv } from '../../StylesConstants/StylesConstants';

const MultipleSelectComponent = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const dispatch = useDispatch();

  const { tags } = useSelector(appSelector);

  const handleChange = (event: SelectChangeEvent<never[]>) => {
    setSelectedValues(event.target.value);
  };

  useEffect(() => {
    const dispatchFilteredPosts = () => {
      dispatch(setFilters(selectedValues));
    }
    dispatchFilteredPosts();
  }, [dispatch, selectedValues])

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', padding: '1rem' }}>
      <Box sx={centeredDiv}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="multiple-select-label">choose tagse</InputLabel>
          <Select
            labelId="multiple-select-label"
            id="multiple-select"
            multiple
            value={selectedValues}
            onChange={handleChange}
            renderValue={(selected) => (
              <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}> 
                {selected.map((value) => (
                  <span style={{ color: 'blue' }} key={value}>
                    {value}
                  </span>
                ))}
              </div>
            )}
            sx={{ maxWidth: 200, overflow: 'hidden' }}
          >
            {tags.map((item, index) => (
              <MenuItem sx={{ color: 'blue' }} key={item + index} value={`${item }`}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default MultipleSelectComponent;