import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

function Logo() {
  return (
    <Link href="/" >
      <Image src="/logo.png" alt="logo" width={100} height={100} /></Link>
  )
}
export default Logo