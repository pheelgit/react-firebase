import { db } from 'firebase.js'
import { uid } from 'uid'
import { set, ref, onValue, remove, update } from 'firebase/database'
import { useEffect, useState } from 'react'
import { useFilter } from 'hooks/useFilter'

//connect to db
export const useDataBase = type => {
  const [items, setItems] = useState([])
  useEffect(() => {
    onValue(ref(db, `shoplist/${type}`), snapshot => {
      const data = snapshot.val()
      data && setItems(Object.values(data))
    })
  }, [])
  const completed = useFilter(items, ['complete', true])
  const unCompleted = useFilter(items, ['complete', false])

  return { items, completed, unCompleted }
}

//add  shopItem
export const addShopItem = (type, item) => {
  const uuid = uid()
  set(ref(db, `shoplist/${type}/${uuid}`), {
    ...item,
    uuid,
    complete: false,
  })
}

//toggle complete
export const toggleShopComplete = (type, { uuid, complete }) => {
  update(ref(db, `shoplist/${type}/${uuid}`), {
    complete: !complete,
  })
}

//delete todo
export const deleteShopItem = (type, uuid) => {
  remove(ref(db, `/shoplist/${type}/${uuid}`))
}
