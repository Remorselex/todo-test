import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { appSelector } from '../../store/appSlice/appSlice';
import { centeredDiv } from '../../StylesConstants/StylesConstants';

const MultipleSelectComponent = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const { tags } = useSelector(appSelector);

  const handleChange = (event: any) => {
    setSelectedValues(event.target.value);
  };

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', padding: '1rem' }}>
      <Box sx={centeredDiv}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="multiple-select-label">Выберите значение</InputLabel>
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
              <MenuItem sx={{ color: 'blue' }} key={item + index} value={`${item + (index + 1)}`}>
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