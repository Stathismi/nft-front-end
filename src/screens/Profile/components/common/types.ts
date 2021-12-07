import { SVGType } from 'src/components/SVG/SVG';
import { ColorsType } from 'src/styles/types';

export type ProfileActionType = {
  onPress: () => void;
  icon: SVGType;
  divider?: boolean;
  actionContent: string;
  margin: number;
  color: ColorsType;
};
