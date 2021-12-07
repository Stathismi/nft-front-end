import { useTranslation } from 'react-i18next';
import { CURRENCY_SIGN_RESOLVER } from 'src/utils/constants';

export const useFormValidation = () => {
  const { t } = useTranslation();

  const emailValidation = {
    required: {
      value: true,
      message: t('validations:email:empty'),
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i,
      message: t('validations:email:invalid'),
    },
  };

  const priceValidation = (
    minPrice: number | null,
    maxPrice: number | null,
    currency: keyof typeof CURRENCY_SIGN_RESOLVER
  ) => {
    const notEmpty = { required: { value: true, message: t('sellTickets:validations.price') } };
    if (minPrice && maxPrice) {
      return {
        max: {
          value: maxPrice,
          message: t('sellTickets:validations.range', {
            minPrice: minPrice,
            maxPrice: maxPrice,
            currency: CURRENCY_SIGN_RESOLVER[currency],
          }),
        },
        min: {
          value: minPrice,
          message: t('sellTickets:validations.range', {
            minPrice: minPrice,
            maxPrice: maxPrice,
            currency: CURRENCY_SIGN_RESOLVER[currency],
          }),
        },
        ...notEmpty,
      };
    } else if (maxPrice) {
      return {
        max: {
          value: maxPrice,
          message: t('sellTickets:validations.maxPrice', {
            maxPrice: maxPrice,
            currency: CURRENCY_SIGN_RESOLVER[currency],
          }),
        },
        ...notEmpty,
      };
    } else if (minPrice) {
      return {
        min: {
          value: minPrice,
          message: t('sellTickets:validations.minPrice', {
            minPrice: minPrice,
            currency: CURRENCY_SIGN_RESOLVER[currency],
          }),
        },
        ...notEmpty,
      };
    } else {
      return notEmpty;
    }
  };

  const nameValidation = {
    required: {
      value: true,
      message: t('validations:name:empty'),
    },
    pattern: {
      value: /^[a-z0-9]+$/i,
      message: t('validations:name:invalid'),
    },
  };

  const emailCodesValidation = {
    required: {
      value: true,
      message: t('validations:codes:empty'),
    },
    pattern: {
      value: /^[0-9]{4}$/i,
      message: t('validations:codes:invalid'),
    },
  };

  return { emailValidation, nameValidation, priceValidation, emailCodesValidation };
};
