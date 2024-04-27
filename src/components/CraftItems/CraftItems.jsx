import CraftItemsCard from "../CraftItemsCard/CraftItemsCard";

const CraftItems = () => {
  return (
    <div className="py-20 dark:text-white">
      <div className="mb-14 text-center">
        <h2 className="font-bold font-serif text-5xl">Craft items</h2>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       <CraftItemsCard></CraftItemsCard>
       <CraftItemsCard></CraftItemsCard>
       <CraftItemsCard></CraftItemsCard>
       <CraftItemsCard></CraftItemsCard>
       <CraftItemsCard></CraftItemsCard>
       <CraftItemsCard></CraftItemsCard>
      </div>
    </div>
  );
};

export default CraftItems;
