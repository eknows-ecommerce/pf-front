import { useState, useEffect } from "react";

function useUploadImage() {
   const [image, setImage] = useState();
   const [preview, setPreview] = useState();

   useEffect(() =>{
      if (!image) {
         setPreview(undefined);
         return;
      }
      
      const objectURL = URL.createObjectURL(image);
      setPreview(objectURL);
      return () => URL.revokeObjectURL(objectURL);
   },[image])

   const handleImage = (e) => {
      if (!e.target.files || e.target.files.length === 0)  {
         setImage(undefined) 
         return
      }
       setImage(e.target.files[0]);
   }

   return {
      preview,
      handleImage
   }
}

export default useUploadImage