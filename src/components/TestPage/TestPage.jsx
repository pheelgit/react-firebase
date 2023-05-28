import React from 'react'
import { useDataForChartLine1 } from 'api/useMoney'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { Tooltip, Typography } from '@mui/material'

export const TestPage = () => {
  const [food2021] = useDataForChartLine1({ year: 2022, id: 'food' })
  return (
    <>
      <br />
      <br />
      <LineChart
        width={320}
        height={150}
        data={food2021}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='mounth' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='count' stroke='#8884d8' />
      </LineChart>

      <br />
      <br />
      <Typography className='px-6 break-all'>
        <Typography paragraph>
          Происходит коннект firebase к гугл таблице. Выбирается конкретная
          категория за конкретный месяц.
        </Typography>
        <Typography paragraph>
          Если поменять в таблице значение, то на графике это отобразится в
          течение 1 секунды.
        </Typography>
        <Typography paragraph>
          Можно сделать selects и filters для визуализации всех данных по
          определенным условиям. но ни селектов ни фильтров пока нет
        </Typography>
      </Typography>
    </>
  )
}
