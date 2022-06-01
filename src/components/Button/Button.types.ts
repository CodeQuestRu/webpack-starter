import { ButtonProps } from 'antd/lib/button/button';

// Поддерживаемые типы кнопок
export type TType = 'default' | 'primary' | 'success' | 'danger' | 'link';

// Параметры для стилей кнопки
export interface IStyled {
  normal?: string,
  active?: string
}

// Пропсы для кнопок
export interface IButtonProps extends Omit<ButtonProps, 'type'> {
  type?: TType;
  invert?: boolean;
}

// Доступные компоненты кнопок
export interface IComponentMap {
  default?: any;
  primary?: any;
  danger?: any;
  ghost?: any;
  link?: any;
  success?: any;
}
