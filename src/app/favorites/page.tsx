import { fetchFavorite } from "@/actions/actions"
import EmptyList from "@/components/home/EmptyList"
import LandmarkList from "@/components/home/LandmarkList"

const FavoritesPage = async () => {
    const favorites = await fetchFavorite()
    if (favorites.length === 0) {
        return (
            <EmptyList headding="No Favorite" message="Please try again" btnText="Back Home" />
        )
    }
    return (
        <LandmarkList landmarks={favorites} />
    )
}
export default FavoritesPage