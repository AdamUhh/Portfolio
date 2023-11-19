import { ReactNode } from "react";

interface FormLayoutProps {
  children: ReactNode;
}

interface FieldProps {
  label: string;
  type: string;
  id: any;
}

interface FormButtonProps {
  isSuccessful: boolean;
}

export type { FormLayoutProps, FieldProps,FormButtonProps };
