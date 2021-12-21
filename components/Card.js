import React from "react";

export default function Card({ image, title, ...rest }) {
  return (
    <a
      className="block shadow-2xl overflow-hidden rounded-md hover:scale-101 md:hover:scale-110 ease-out duration-500 group bg-white"
      target="_blank"
      {...rest}
      title={title}
    >
      <article className="card w-full">
        <div className="group-hover:blur-sm ease-out duration-500 w-full xl:h-96 lg:h-80 md:h-56 h-80">
          <img className="object-cover w-full h-full" src={image} alt={title} />
        </div>
        <h2 className="text-center py-5 text-ellipsis text-sm md:text-lg">{title}</h2>
      </article>
    </a>
  );
}
