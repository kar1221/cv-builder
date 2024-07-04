import React from "react";
import { Icon } from "@iconify/react";
import { Editable, Hidden, Visible } from "../Editable";
import { ContactsType } from "../types";

function Contact(props: ContactProps) {
  const { phoneNumber, email, address, onChange } = props;

  function handleOnChange(key: keyof ContactsType) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...props,
        [key]: event.target.value,
      });
    };
  }

  return (
    <Editable className="flex flex-col gap-4" position="top-right">
      <h2 className="mb-2 font-Poppins text-xl font-bold uppercase tracking-header text-zinc-600">
        Contacts
      </h2>
      <div className="flex items-center gap-2">
        <Icon icon="mdi:phone-classic" className="h-4 w-4 text-zinc-700" />
        <Hidden>
          <input
            type="tel"
            className="w-full border-b border-zinc-500 bg-transparent font-Poppins text-sm text-zinc-700 placeholder:text-zinc-500"
            value={phoneNumber}
            onChange={handleOnChange("phoneNumber")}
            placeholder="+(123) 456-7890"
          />
        </Hidden>
        <Visible>
          <p className="font-Poppins text-sm text-zinc-700">{phoneNumber}</p>
        </Visible>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon="mdi:email" className="h-4 w-4 text-zinc-700" />
        <Hidden>
          <input
            type="email"
            className="w-full border-b border-zinc-500 bg-transparent font-Poppins text-sm text-zinc-700 placeholder:text-zinc-500"
            value={email}
            onChange={handleOnChange("email")}
            placeholder="4Jpj7@example.com"
          />
        </Hidden>
        <Visible>
          <p className="font-Poppins text-sm text-zinc-700">{email}</p>
        </Visible>
      </div>
      <div className="flex items-center gap-2">
        <Icon icon="mdi:location" className="h-4 w-4 text-zinc-700" />
        <Hidden>
          <input
            type="text"
            className="w-full border-b border-zinc-500 bg-transparent font-Poppins text-sm text-zinc-700 placeholder:text-zinc-500"
            value={address}
            onChange={handleOnChange("address")}
            placeholder="123 Main St, Anytown, USA"
          />
        </Hidden>
        <Visible>
          <p className="font-Poppins text-sm text-zinc-700">{address}</p>
        </Visible>
      </div>
    </Editable>
  );
}

interface ContactProps {
  phoneNumber: string;
  email: string;
  address: string;
  onChange: (value: ContactsType) => void;
}

export default Contact;
