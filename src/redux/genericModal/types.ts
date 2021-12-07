import { ColorsType } from 'src/styles/types';

export const OPEN_GENERIC_MODAL = 'OPEN_GENERIC_MODAL';
export const CLOSE_GENERIC_MODAL = 'CLOSE_GENERIC_MODAL';

export interface GenericModalState {
  genericModal?: GenericModalProperties;
}

export type GenericModalStatuses = 'complete' | 'warning';

export type GenericModalSizes = 'small' | 'medium' | 'large';

export interface GenericModalProperties {
  title: string;
  message?: string;
  isTransparent?: boolean;
  outsetColorShadow?: ColorsType;
  blurView?: boolean;
  isNotice?: boolean;
  formComponent?: JSX.Element;
  color?: 'candyYellow' | 'candyRed';
  primaryLabel?: string;
  primaryOnPress?: () => void;
  secondaryLabel?: string;
  secondaryOnPress?: () => void;
}

export interface OpenGenericModalAction {
  type: typeof OPEN_GENERIC_MODAL;
  payload: GenericModalProperties;
}

export interface CloseGenericModalAction {
  type: typeof CLOSE_GENERIC_MODAL;
}

export type GenericModalActionTypes = OpenGenericModalAction | CloseGenericModalAction;
