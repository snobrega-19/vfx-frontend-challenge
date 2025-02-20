export type LoginFormProps = {
  onSubmit: (data: any) => void;
};

export type LoginData = {
  clientId: string;
  userId: string;
  password: string;
};
