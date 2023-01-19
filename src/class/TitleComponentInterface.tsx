import { TitleFormat } from "./TitleFormat";

interface ITitleInterface {
  title: string;
  subtitle?: string;
  editable?: boolean;
  callback?: (value: string, type: TitleFormat) => void;
}

export default ITitleInterface;