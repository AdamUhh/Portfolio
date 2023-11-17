import { ReactNode } from "react";

interface FormLayoutProps {
  children: ReactNode;
}

interface FieldProps {
  label: string;
  type: string;
  id: any;
}

interface T_formState {
  success?: boolean;
  message?: string;
}

export type { FormLayoutProps, FieldProps, T_formState };
