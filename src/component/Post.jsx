import React from "react";

const Post = ({ data }) => {
  return (
    <>
      <div className="w-[1440px] mx-auto">
        <h1 className="text-center text-[30px] text-semibold">Pagination</h1>
          <ul className="w-[580px] border border-black mt-[16px]">
          {data.map((item) => {
          return <li className="w-full h-[40px] border border-black text-[17px] pl-[10px]" key={item.id}>{item.title}</li>;
        })}
          </ul>
      </div>
    </>
  );
};

export default Post
