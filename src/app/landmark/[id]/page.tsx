import { fetchLandmarkDetail } from "@/actions/actions";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import Breadcrumbs from "@/components/landmark/Breadcrumbs";
import Description from "@/components/landmark/Description";
import ImageContainer from "@/components/landmark/ImageContainer";
import ShareButton from "@/components/landmark/ShareButton";
import MapLandmark from "@/components/map/Maplandmark";
import { redirect } from "next/navigation";

// rafce
const LandmarkDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = params; // No need to await here
    const landmark = await fetchLandmarkDetail({ id });

    if (!landmark) {
        // Redirect to the home page if the landmark is not found
        redirect("/");
    }

    return (
        <section>
            <Breadcrumbs name={landmark.name} />
            <header className="flex justify-between mt-4 items-center">
                <h1 className="text-4xl font-bold"> {landmark.name}</h1>

                <div className="flex items-center gap-x-4">
                    <ShareButton landmarkId={landmark.id} name={landmark.name} />
                    <FavoriteToggleButton landmarkId={landmark.id} />
                </div>
            </header>
            {/* Image */}
            <ImageContainer mainImage={landmark.image} name={landmark.name} />
            {/* Detail */}
            <section>
                <div>
                    <Description description={landmark.description} />
                    <MapLandmark
                        location={{ lat: landmark.lat, lng: landmark.lng }}
                    />
                </div>
            </section>
            <section>

            </section>
        </section>
    );
};

export default LandmarkDetail;
