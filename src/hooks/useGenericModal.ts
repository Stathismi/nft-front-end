import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { GenericModalProperties, openGenericModalAction } from 'src/redux/genericModal';

type InfoModalTypes =
  | 'emailSent'
  | 'listSale'
  | 'cancelListSale'
  | 'shareTicket'
  | 'unshareTicket'
  | 'firstNameChanged'
  | 'lastNameChanged'
  | 'nameError'
  | 'ticketScannedResale'
  | 'ticketScannedShare';

/**@TODO add the rest of the modals here */
const useGenericModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showInfoModal = (type: InfoModalTypes) => {
    switch (type) {
      case 'emailSent':
        {
          const modalParams: GenericModalProperties = {
            blurView: false,
            isTransparent: true,
            title: t('login:modals.email_sent_info.title'),
            message: t('login:modals.email_sent_info.message'),
            outsetColorShadow: 'cardinalTealShadow',
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'listSale':
        {
          const modalParams: GenericModalProperties = {
            title: t('sellTickets:modals.sell_completion.title'),
            message: t('sellTickets:modals.sell_completion.message'),
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'cancelListSale':
        {
          const modalParams: GenericModalProperties = {
            title: t('sellTickets:modals.unsell_completion.title'),
            message: t('sellTickets:modals.unsell_completion.message'),
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'shareTicket':
        {
          const modalParams: GenericModalProperties = {
            title: t('shareTicket:modals.share_completion.title'),
            message: t('shareTicket:modals.share_completion.message'),
            isNotice: true,
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'unshareTicket':
        {
          const modalParams: GenericModalProperties = {
            title: t('shareTicket:modals.unshare_completion.title'),
            message: t('shareTicket:modals.unshare_completion.message'),
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'firstNameChanged':
        {
          const modalParams: GenericModalProperties = {
            title: t('profile:modals.change_name_successful_update.title'),
            message: t('profile:modals.change_name_successful_update.message', {
              option: t(`profile:firstName`),
            }),
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'lastNameChanged':
        {
          const modalParams: GenericModalProperties = {
            title: t('profile:modals.change_name_successful_update.title'),
            message: t('profile:modals.change_name_successful_update.message', {
              option: t(`profile:lastName`),
            }),
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'nameError':
        {
          const modalParams: GenericModalProperties = {
            title: t('profile:modals.change_name_error.title'),
            message: t('profile:modals.change_name_error.message'),
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'ticketScannedResale':
        {
          const modalParams: GenericModalProperties = {
            title: t('viewTickets:modals.ticketScanned.title', { option: t('viewTickets:sell') }),
          };
          dispatch(openGenericModalAction(modalParams));
        }
        break;
      case 'ticketScannedShare': {
        const modalParams: GenericModalProperties = {
          title: t('viewTickets:modals.ticketScanned.title', { option: t('viewTickets:share') }),
        };
        dispatch(openGenericModalAction(modalParams));
      }
    }
  };

  return { showInfoModal };
};

export default useGenericModal;
