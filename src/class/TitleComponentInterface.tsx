import { TitleFormat } from "./TitleFormat";

interface TitleInterface {
  title: string;
  subtitle?: string;
  editable?: boolean;
  callback?: (value: string, type: TitleFormat) => void;
}

export default TitleInterface;