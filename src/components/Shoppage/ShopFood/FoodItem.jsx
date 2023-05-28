import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { deleteShopItem, toggleShopComplete } from 'api/useFetchingShopList'
import { useParams } from 'react-router-dom'

import ClearIcon from '@mui/icons-material/Clear'

export const FoodItem = ({ food }) => {
  const { item, complete, uuid, quantity, typeQuantity } = food
  const { '*': itemType } = useParams()
  return (
    <ListItem className='flex'>
      <FormControlLabel
        className='grow'
        label={
          <ListItemText
            primary={item}
            secondary={
              <Typography>
                {quantity} {typeQuantity}
              </Typography>
            }
          />
        }
        control={
          <Checkbox
            checked={complete}
            onChange={() => toggleShopComplete(itemType, food)}
          />
        }
      />

      <ClearIcon onClick={() => deleteShopItem(itemType, uuid)} />
    </ListItem>
  )
}
