import Image from "next/image";

export default function StarRating({ rating }: any) {
  const stars = new Array(rating).fill(0);
  return (
    <>
      {stars.map((star, index) => (
        <Image
          key={index}
          src={`/assets/star.svg`}
          alt="Star Rating"
          width={20}
          height={20}
        />
      ))}
    </>
  );
}
