import { categories } from "@/utils/categories";
import Link from "next/link";
const CategoriesList = ({
    search,
    category,
}: {
    search?: string;
    category?: string;
}) => {
    const searchTerm = search ? `&search=${search}` : "";

    return (
        <div>
            <div className="flex justify-center my-4 font-bold gap-x-4 ">
                {categories.map((item) => {
                    const isActive = item.label === category
                    return (
                        <Link
                            href={`/?category=${item.label}${searchTerm}`}
                            key={item.label}
                        >
                            <article className={`p-3 flex flex-col 
              justify-center hover:text-teal-600 hover:scale-110
              hover:duration-300
              items-center ${isActive ? 'text-teal-600' : ''}`}>
                                <item.icon />
                                <p>{item.label}</p>
                            </article>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
export default CategoriesList;