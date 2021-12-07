import { simpleAction } from '../utils';
import {
  CLOSE_GENERIC_MODAL,
  CloseGenericModalAction,
  GenericModalProperties,
  OPEN_GENERIC_MODAL,
  OpenGenericModalAction,
} from './types';

export const openGenericModalAction = (params: GenericModalProperties): OpenGenericModalAction =>
  simpleAction(OPEN_GENERIC_MODAL, params);

export const closeGenericModalAction = (): CloseGenericModalAction =>
  simpleAction(CLOSE_GENERIC_MODAL);
