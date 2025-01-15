'use client'
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce'



const Search = () => {
  const searchParams = useSearchParams()
  console.log(searchParams.get('search'))
  const { replace } = useRouter()
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');


  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`/?${params.toString()}`)
  }, 500)

  // useEffect(() => {
  //   if (!searchParams.get('search')) {
  //     setSearch("");
  //   }
  // }, [searchParams.get('search')]);
  useEffect(() => {
    setSearch(searchParams.get('search')?.toString() || "");
  }, [searchParams]);

  return (
    <Input type="search" placeholder="Search..." className="max-w-xs" value={search}
      onChange={(e) => {
        handleSearch(e.target.value)
        setSearch(e.target.value)

      }}
    />
  )
}
export default Search