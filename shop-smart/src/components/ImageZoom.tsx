// "use client"
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// // Komponen untuk efek zoom pada gambar
// const ImageZoom = () => {
//     const imgRef = useRef(null); // Membuat referensi ke elemen gambar
//     // console.log("prduct dalam image = " + product)
//     // Effect untuk menangani mouse move dan mouse leave
//     useEffect(() => {
//         // const img = imgRef.current;
//         // console.log("imgRef.current = " + product)

//         // const handleMouseMove = (e) => {
//         //     const { left, top, width, height } = img.getBoundingClientRect();
//         //     const x = e.clientX - left;
//         //     const y = e.clientY - top;

//         //     // Mengatur origin zoom
//         //     img.style.transformOrigin = `${(x / width) * 100}% ${(y / height) * 100}%`;
//         //     img.classList.add('zoomed'); // Tambahkan class zoomed untuk efek
//         // };

//         // const handleMouseLeave = () => {
//         //     img.classList.remove('zoomed'); // Hapus class zoomed
//         // };

//         // img.addEventListener('mousemove', handleMouseMove);
//         // img.addEventListener('mouseleave', handleMouseLeave);

//         // // Clean up event listener saat komponen di-unmount
//         // return () => {
//         //     img.removeEventListener('mousemove', handleMouseMove);
//         //     img.removeEventListener('mouseleave', handleMouseLeave);
//         // };
//     }, []);

//     return (
//         <div className="imageWrapper" style={{ overflow: 'hidden' }}>
//             image zoom component di bawahnya ini
//             <Image
//                 src={product} // Ganti dengan URL gambar produk
//                 alt={product} // Judul gambar produk
//                 ref={imgRef} // Tambahkan referensi ke elemen gambar
//                 className="zoomableImage" // Class untuk styling
//                 style={{ transition: 'transform 0.3s ease', width: '100%', height: 'auto' }} // Gaya dasar
//                 width={100}
//                 height={40}
//             />
//         </div>
//     );
// };

// export default ImageZoom;