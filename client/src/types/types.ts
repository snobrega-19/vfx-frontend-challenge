import { Dispatch, SetStateAction } from "react";

export type LoginFormProps = {
  onSubmit: (data: any) => void;
  loginErrorMessage?: string;
};

export type FormValues = {
  clientId?: string;
  userId?: string;
  password?: string;
} & { [key: string]: string | undefined };

export type LoginData = {
  clientId: string;
  userId: string;
  password: string;
};

export type DailyPrice = {
  open?: string;
  low?: string;
  high?: string;
  close?: string;
};

export type LoginContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export type NavbarProps = {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};
