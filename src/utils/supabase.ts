import { createClient } from '@supabase/supabase-js'
const bucket='landmark-bucket'
const url= process.env.NEXT_PUBLIC_SUPABASE_URL as string
const key= process.env.NEXT_PUBLIC_SUPABASE_KEY as string
// Create Supabase client
const supabase = createClient(url, key)
// Upload file using standard upload
export async function uploadFile(image: File) {

    const timeStamp = Date.now()
    const newName = `Travel-${timeStamp}-${image.name}`

  const { data, error } = await supabase.storage
  .from(bucket)
  .upload(newName, image)
    if(!data) throw new Error("Failed to upload file") //error
 

    return supabase.storage
    .from(bucket)
    .getPublicUrl(newName).data.publicUrl
}
