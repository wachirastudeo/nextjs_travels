import { fetchLandmarkDetail } from "@/actions/actions"

const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params
    const landmark = await fetchLandmarkDetail(id)
    console.log(landmark)

    return (
        <div>

        </div>
    )
}
export default LandmarkDetail