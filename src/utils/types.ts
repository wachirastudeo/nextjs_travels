export type actonFunction=(
    prevState:any,
    formData:FormData
  )=>Promise<{message:string}>
  
  