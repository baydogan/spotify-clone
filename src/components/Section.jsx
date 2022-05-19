import SectionTitle from "./SectionTitle";
import ItemCard from "./ItemCard";

const Section = ({ title, items }) => {

  return (
    <section>
      <SectionTitle title={title} />
      <div className="w-full flex flex-wrap gap-x-8">
        {items.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Section;
