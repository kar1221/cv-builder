import React from "react";
import { Icon } from "@iconify/react";
import { Editable, Hidden, Visible } from "../Editable";

function Contact(props: ContactProps) {
  const {
    phoneNumber,
    email,
    address,
    onEmailChange,
    onPhoneChange,
    onAddressChange,
  } = props;

  return (
    <Editable className="flex flex-col gap-4">
      <h2 className="mb-4 font-Poppins text-xl font-bold tracking-header text-zinc-600">
        CONTACTS
      </h2>
      <div className="flex items-center gap-4">
        <Icon icon="mdi:phone-classic" className="h-4 w-4 text-zinc-700" />
        <Hidden>
          <input
            type="tel"
            className="w-full border-b border-zinc-500 bg-transparent font-Poppins text-zinc-700 placeholder:text-zinc-500"
            value={phoneNumber}
            onChange={onPhoneChange}
            placeholder="+(123) 456-7890"
          />
        </Hidden>
        <Visible>
          <p className="font-Poppins text-zinc-700">{phoneNumber}</p>
        </Visible>
      </div>
      <div className="flex items-center gap-4">
        <Icon icon="mdi:email" className="h-4 w-4 text-zinc-700" />
        <Hidden>
          <input
            type="email"
            className="w-full border-b border-zinc-500 bg-transparent font-Poppins text-zinc-700 placeholder:text-zinc-500"
            value={email}
            onChange={onEmailChange}
            placeholder="4Jpj7@example.com"
          />
        </Hidden>
        <Visible>
          <p className="font-Poppins text-zinc-700">{email}</p>
        </Visible>
      </div>
      <div className="flex items-center gap-4">
        <Icon icon="mdi:location" className="h-4 w-4 text-zinc-700" />
        <Hidden>
          <input
            type="text"
            className="w-full border-b border-zinc-500 bg-transparent font-Poppins text-zinc-700 placeholder:text-zinc-500"
            value={address}
            onChange={onAddressChange}
            placeholder="123 Main St, Anytown, USA"
          />
        </Hidden>
        <Visible>
          <p className="font-Poppins text-zinc-700">{address}</p>
        </Visible>
      </div>
    </Editable>
  );
}

interface ContactProps {
  phoneNumber: string;
  email: string;
  address: string;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default Contact;
