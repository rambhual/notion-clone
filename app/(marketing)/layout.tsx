import React, { ReactNode } from "react";

type MarketingLayoutProps = {
  children: ReactNode;
};
const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className='h-full dark:bg-[#1F1F1F]'>
      <main className='h-full pt-40'>{children}</main>
    </div>
  );
};

export default MarketingLayout;
