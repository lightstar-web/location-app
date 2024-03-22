import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function DistanceShow({ distanceShow }) {

  return (
    <FormGroup>
      <FormControlLabel
          onClick={distanceShow}
          control={<Switch color="primary" />}
          label="distance show"
          labelPlacement="top"
        />
    
    </FormGroup>
  );
}
