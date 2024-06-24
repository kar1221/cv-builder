import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="before:clip-path-header sticky left-0 right-0 flex h-64 items-center justify-center self-stretch before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-teal-400 before:content-['']">
      <h1 className="-mt-10 flex items-center justify-center gap-4 font-roboto-slab text-4xl font-bold text-zinc-50 sm:text-5xl">
        <Icon icon="pepicons-pop:cv-circle-filled" />
        CV Builder
      </h1>
    </div>
  );
};

export default Header;
