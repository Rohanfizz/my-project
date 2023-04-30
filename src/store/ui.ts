import { atom } from "recoil";

export  const alertAtom = atom({
    key: 'alertAtom', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

