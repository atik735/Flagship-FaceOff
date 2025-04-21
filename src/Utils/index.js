// export const getFavorites =()=>{
//     const favorites=localStorage.getItem('favorites')
//     if (favorites) {
//         return JSON.parse(favorites)
//     }
//         return []
// }


// export const addFavorite = phone => {
//     const favorites = getFavorites()
//     const isExist = favorites.find(p => p.id === phone.id)
//     if (isExist) return console.log("phone Already Added")
//     favorites.push(phone)
//     localStorage.setItem('favorites', JSON.stringify(favorites))
// }
import toast from 'react-hot-toast'

export const getFavorites = () => {
  const favorites = localStorage.getItem('favorites')
  if (favorites) return JSON.parse(favorites)
  return []
}

export const addFavorite = phone => {
  const favorites = getFavorites()
  const isExist = favorites.find(p => p.id === phone.id)
  if (isExist) return toast.error('Phone Already Added')
  favorites.push(phone)
  toast.success('Phone Added Successfully!!')
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const removeFavorite = id => {
  const favorites = getFavorites()
  const remainingFavorites = favorites.filter(phone => phone.id !== id)
  localStorage.setItem('favorites', JSON.stringify(remainingFavorites))
  toast.success('Removed Successfully!!')
}