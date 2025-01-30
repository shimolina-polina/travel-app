import { IComboBoxOption } from "./IComboBoxOption";

export interface IComboBoxProps {
  label: string;
  icon?: null
  options: IComboBoxOption[];
  value?: IComboBoxOption | null;
  width?: string | number;
  height?: number;
  onChange: (newValue: IComboBoxOption | null) => void;
  size?: "small" | "medium"
}