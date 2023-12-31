import { ChangeEvent, ReactNode } from "react";

interface FormLayoutProps {
  children: ReactNode;
}

interface FieldProps {
  label: string;
  type: string;
  id: any;
  placeholder?: string;
  required?:boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

interface FormButtonProps {
  isSuccessful: boolean;
}

export type { FieldProps, FormButtonProps, FormLayoutProps };
