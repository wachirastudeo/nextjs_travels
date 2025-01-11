import { fetchFavorite } from "@/actions/actions"
import LandmarkList from "@/components/home/LandmarkList"

const FavoritesPage = async () => {
    const favorites = await fetchFavorite()
    console.log(favorites)
    return (
        <LandmarkList landmarks={favorites} />
    )
}
export default FavoritesPage