export const MainContent = ({ page }) => {
  return (
    <div className="order-1 flex h-full w-full flex-wrap items-center justify-center gap-10 overflow-y-auto py-4 lg:order-2">
      {page}
    </div>
  );
};
