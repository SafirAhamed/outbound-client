export type MarqueeItem =
  | {
      id: string;
      type?: "pill" | "text";
      label?: string;
      href?: string;
      pillClassName?: string;
    }
  | {
      id: string;
      type: "image";
      label?: string;
      imageSrc: string;
      href?: string;
      imageClassName?: string;
    };