import { IComboBoxOption } from "./IComboBoxOption";

export interface IComboBoxProps {
  label: string;
  options: IComboBoxOption[];
  value?: IComboBoxOption | null;
  width?: string | number;
  height?: number;
  onChange: (newValue: IComboBoxOption | null) => void;
}