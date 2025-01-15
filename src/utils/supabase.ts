import { createClient } from '@supabase/supabase-js'
const bucket='landmark-bucket'
const url= process.env.NEXT_PUBLIC_SUPABASE_URL as string
const key= process.env.NEXT_PUBLIC_SUPABASE_KEY as string
// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  const timeStamp = Date.now();
  const newName = `Travel-${timeStamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: '3600',
    });

  if (error) {
    console.error("Error during upload:", error.message);
    throw new Error("Image upload failed!!!");
  }

  // ใช้ data เพื่อดึง URL ของไฟล์ที่อัปโหลด
  const publicUrl = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path).data.publicUrl;  // ใช้ data ในการดึง URL

  return publicUrl;
}
