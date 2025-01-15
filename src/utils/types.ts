
export type actionFunction = (
  prevState: { formValues: string },  // ระบุประเภทให้ชัดเจน
  formData: FormData
) => Promise<{ message: string }>;

export type LandmarkCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  province: string;
  price: number;
  lat: number;
  lng: number;
};
