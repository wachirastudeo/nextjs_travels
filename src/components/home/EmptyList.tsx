import Link from "next/link"
import { Button } from "../ui/button"

const EmptyList = ({ headding = 'No item', message = 'Please try again', btnText = 'Back Home' }: { headding?: string, message?: string, btnText?: string }) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold ">{headding}</h1>
            <p className="text-lg mb-4"> {message}</p>
            <Link href='/'> <Button asChild variant="outline" >{btnText}</Button></Link>
        </div>
    )
}
export default EmptyList