import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="sticky right-0 left-0 h-64 flex justify-center items-center before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-teal-400 before:clip-path-header self-stretch">
      <h1 className="font-roboto-slab text-zinc-50 text-5xl -mt-10 font-bold flex justify-center items-center gap-4">
        <Icon icon="pepicons-pop:cv-circle-filled" />
        CV Builder
      </h1>
    </div>
  );
};

export default Header;
