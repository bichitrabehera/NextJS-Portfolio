"use client";
import { GithubActivity } from "github-contributions-ui";
import { Divider } from "../ui/Divider";

const Github = () => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-4">
      
      <GithubActivity username="bichitrabehera" theme="dark" />

      <div className="px-6">
        <Divider />
      </div>

    </div>
  );
};

export default Github;