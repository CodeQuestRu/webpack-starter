import styled from '@emotion/styled';

// Компонент
import { Button } from 'antd';

// Наша тема
import { theme } from '@config';

// Типы
import { IStyled, IButtonProps } from './Button.types';


// Достаем все цвета
const { colors } = theme;


/**
 * Функция для создания кнопок с заливкой и без
 * @param { normal, active }
 * @returns 
 */
const getStyled = ({ normal, active }: IStyled) => {
  return styled(Button) <IButtonProps>`
    text-shadow: none;
    box-shadow: none;
    border-color: ${normal};
    background-color: ${({ invert }) => invert ? colors.white : normal};    
    color: ${({ invert }) => invert ? normal : colors.white};
    
    &:focus {      
      outline: solid 1px ${colors.light_blue};
      outline-offset: 1px;
      border-color: ${normal};
      background-color: ${({ invert }) => invert ? colors.white : normal};    
      color: ${({ invert }) => invert ? normal : colors.white};
    }

    &:hover {
      border-color: ${normal};
      background-color: ${({ invert }) => invert ? normal : colors.white};
      color: ${({ invert }) => invert ? colors.white : normal}; 
    }

    &:hover:active {
      background-color: ${active};
      border-color: ${active};
      color: ${colors.white};
    }

    &:disabled {
      border-color: ${normal};
      background-color: ${({ invert }) => invert ? colors.white : normal};    
      color: ${({ invert }) => invert ? normal : colors.white};
      opacity: 0.5;
      pointer-events: none;
    }
  `;
}


// Кнопка с типом "primary"
export const PrimaryButton = getStyled({
  normal: colors.clear_blue,
  active: colors.dark_clear_blue
});

// Кнопка с типом "success"
export const SuccessButton = getStyled({
  normal: colors.topaz,
  active: colors.dark_topaz
});

// Кнопка с типом "danger"
export const DangerButton = getStyled({
  normal: colors.orange,
  active: colors.dark_orange
});

// Кнопка с типом "link"
export const LinkButton = styled(Button) <IButtonProps>`
  height: inherit;
  text-shadow: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-radius: 0;
  border-bottom: 1px dashed;
  padding: 0;
  background-color: transparent;
  color: ${colors.clear_blue};

  &:focus {
    background-color: transparent;
    color: ${colors.clear_blue};
    border-color: ${colors.orange}
  }

  &:hover {
    background-color: transparent;
    color: ${colors.orange};
    border-color: ${colors.orange}
  }

  &:hover:active {
    background-color: transparent;
    color: ${colors.orange};
    border-color: ${colors.orange}
  }
  
  &:disabled {
    color: ${colors.clear_blue};
    opacity: 0.5;
    pointer-events: none;
  }
`;
