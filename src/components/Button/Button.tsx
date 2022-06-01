import React, { forwardRef } from 'react';

// Типы
import {
  IButtonProps,
  IComponentMap
} from './Button.types';

// Импортируем все кнопки
import {
  PrimaryButton,
  SuccessButton,
  DangerButton,
  LinkButton
} from './Button.styles';


const Button = forwardRef(({
  type = 'default',
  invert = false,
  ...props
}: IButtonProps, ref) => {

  const componentMap: IComponentMap = {
    default: PrimaryButton,
    primary: PrimaryButton,
    success: SuccessButton,
    danger: DangerButton,
    link: LinkButton
  };

  // Опредеояем нужную кнопку по ее типу
  const BtnComponent = componentMap[type];

  // Кнопка по умолчанию без заливки
  if (type === 'default') invert = true;

  // Создаем компоненты
  return <BtnComponent {...props} invert={invert} danger={type === 'danger'} />;
});

export default Button;
