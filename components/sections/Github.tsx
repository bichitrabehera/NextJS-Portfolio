"use client";
import { GithubActivity } from "github-contributions-ui";
const Github = () => {
  return (
    <>
      <div
        className="max-w-2xl mx-auto px-6 
            flex flex-col gap-1
            md:flex-row md:items-center md:justify-between
            py-6"
      >
        <GithubActivity username="bichitrabehera" theme="blue" />
      </div>
    </>
  );
};

export default Github;
