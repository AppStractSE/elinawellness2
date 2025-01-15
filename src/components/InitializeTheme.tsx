"use client";
import { content } from "@/data/content";
import { useEffect } from "react";

const InitializeTheme = () => {
  useEffect(() => {
    content.applyTheme(content.theme);
  }, []);
  return <></>;
};

export default InitializeTheme;
