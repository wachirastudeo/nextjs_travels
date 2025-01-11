"use server";

import {
  imageSchema,
  landmarkSchema,
  profileSchema,
  validateWithZod,
} from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from 'next/cache';

const getAuthUser = async () => {
  // code body
  const user = await currentUser();
  if (!user) {
    throw new Error("You must logged!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

const renderError = (error: unknown): { message: string } => {
  //code body
  return {
    message: error instanceof Error ? error.message : "An Error!!!",
  };
};
export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
   
    const user = await currentUser()
    if (!user) {
      throw new Error("You must logged!!!");
    }
    const rawData = Object.fromEntries(formData);
    const validateField = validateWithZod(profileSchema, rawData);
    // console.log("validated", validateField);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });
    const client = await clerkClient()

    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    })

    // return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};



export const createLandmarkAction = async (
  prevState: any,
  formData: FormData
):Promise<{ message: string }> => {
  try {
   
    const user = await getAuthUser(); 
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    // console.log( rawData);
    const validateFile = validateWithZod(imageSchema, { image: file });

    const validateField = validateWithZod(landmarkSchema, rawData);
    
    const fullPath= await uploadFile(validateFile.image);

    await db.landmark.create({
      data: {
        ...validateField,
        image: fullPath,
        profileId: user.id,
        
      },
    });

   
    // return { message: "Create Landmark Success!!!" };
  } catch (error) {
    // console.log(error);
    return renderError(error);
  }
  redirect("/");
};
export const fetchLandmark = async () => {
  try {
    const landmark = await db.landmark.findMany({
      orderBy: {
        createdAt: "desc",
      }
      
    })
    return landmark;
  } catch (error) {
    return renderError(error);
  }
}

export const fetchFavoriteId = async ({landmarkId}:{landmarkId:string})=>{

  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where:{
      landmarkId: landmarkId,
      profileId: user.id
    },select:{
      id: true
    }
  })
  return favorite?.id || null
}

export const toggleFavoriteAction = async (prevState:{
  favoriteId: string | null;
  landmarkId: string;
  pathname: string;
})=>{
  const user = await getAuthUser();
  const {favoriteId, landmarkId, pathname} = prevState;
  try {   

    //delete favorite
    if(favoriteId){
        await db.favorite.delete({ 
          where:{
            id: favoriteId
          }
        })
        }
        else{
          await db.favorite.create({
            data:{
              landmarkId,
              profileId:user.id
            }
          })
        }
        revalidatePath(pathname)
        return {message:favoriteId? "remove favorite": "add favorite"}

    
  } catch (error) {
    return renderError(error);
  }
}












