interface TitleInterface {
  title: string;
  subtitle?: string;
  editable?: boolean;
  callback?: (value: string, type: "h1" | "h5") => void;
}

export default TitleInterface;