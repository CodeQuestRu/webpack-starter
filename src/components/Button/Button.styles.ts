import { css } from '@emotion/css';
import styled from '@emotion/styled';
import tw from 'twin.macro';

// Компонент
import { Button } from 'antd';
import IButtonProps from './Button.types';

// Сброс стилей
// const reset = css`
//   text-shadow: none;
//   box-shadow: none;
//   background-color: transparent;
//   border-color: transparent;
// `;

// Состояние фокуса
const focus = css`
  outline: solid 1px;
  outline-offset: 1px;
`;

// Отключено
const disabled = tw`
  text-white 
  opacity-50 
  pointer-events-none
`;


interface IStyled {
  normal?: string,
  hover?: string,
  active?: string,
  invert?: boolean
}


const getStyled = ({ normal, active, invert }: IStyled) => {
  return styled(Button)`
    text-shadow: none;
    box-shadow: none;
    border-color: ${invert ? normal : 'transparent'};
    background-color: ${invert ? '#fff' : normal};    
    color: ${invert ? normal : '#fff'};

    &:hover {
      border-color: ${invert ? 'transparent' : normal};
      background-color: ${invert ? normal : '#fff'};
      color: ${invert ? '#fff' : normal};
    }

    &:hover:active {
      background-color: ${active};
      color: #fff;
    }

    &:focus {      
      outline: solid 1px;
      outline-offset: 1px;
      background-color: ${normal};
      border-color: transparent;
      color: #fff;
    }

    &:disabled {
      color: #fff;
      opacity: 0.5;
      pointer-events: none;
    }
  `;
}

export const DefaultButton = getStyled({
  normal: '#2889f1',
  active: '#0075C9'
});


export const PrimaryButton = getStyled({
  normal: '#2889f1',
  active: '#0075C9',
  invert: true
});


export const GhostButton = getStyled({
  normal: 'orange'
});


export const DangerButton = getStyled({
  normal: 'red',
  invert: true
});


export const LinkButton = getStyled({
  normal: '#000',
  invert: true
});

// const focus = css`
//   &:focus {
//     &:after {
//       content: '';
//       ${tw`
//         absolute
//         bg-transparent
//         border-light_blue
//         border-solid
//         rounded-full
//       `};
//       border-width: 1px;
//       top: -4px;
//       left: -4px;
//       width: calc(100% + 8px);
//       height: 44px;
//     }
//   }

//   &.ant-btn-sm {
//     &:focus {
//       &:after {
//         height: 36px;
//       }
//     }
//   }
// `;

// const focusGhost = css`
//   &:focus {
//     &:after {
//       content: '';
//       ${tw`
//         absolute
//         bg-transparent
//         border-light_blue
//         border-solid
//         rounded-full
//       `};
//       border-width: 1px;
//       top: -4px;
//       left: -4px;
//       width: calc(100% + 8px);
//       height: calc(100% + 8px);
//     }
//   }
// `;


// Не работает интерполяция строк для макроса tw,
// необходимо указывать классы для каждого цвета.
// https://github.com/ben-rogerson/twin.macro/issues/17
// const primaryStylesMap = {
//   clear_blue: tw`
//     bg-clear_blue
//     border-clear_blue
//     hover:border-clear_blue
//     hover:text-clear_blue
//     hover:active:border-dark_clear_blue
//     hover:active:bg-dark_clear_blue
//     active:border-dark_clear_blue
//     active:bg-dark_clear_blue
//     focus:border-clear_blue
//     focus:bg-clear_blue
//   `,

//   disabled_clear_blue: tw`
//     bg-clear_blue
//     border-clear_blue
//   `,

//   topaz: tw`
//     bg-topaz
//     border-topaz
//     hover:border-topaz
//     hover:text-topaz
//     hover:active:border-dark_topaz
//     hover:active:bg-dark_topaz
//     active:border-dark_topaz
//     active:bg-dark_topaz
//     focus:border-topaz
//     focus:bg-topaz
//   `,

//   disabled_topaz: tw`
//     bg-topaz
//     border-topaz
//   `,
// };

// const defaultStylesMap = {
//   clear_blue: tw`
//     border-clear_blue
//     text-clear_blue
//     hover:text-white
//     hover:border-clear_blue
//     hover:bg-clear_blue
//     hover:active:border-dark_clear_blue
//     hover:active:bg-dark_clear_blue
//     active:border-dark_clear_blue
//     active:bg-dark_clear_blue
//     focus:border-clear_blue
//     focus:bg-clear_blue
//   `,

//   disabled_clear_blue: tw`
//     bg-clear_blue
//     border-clear_blue
//   `,

//   topaz: tw`
//     border-topaz
//     text-topaz
//     hover:text-white
//     hover:border-topaz
//     hover:bg-topaz
//     hover:active:border-dark_topaz
//     hover:active:bg-dark_topaz
//     active:border-dark_topaz
//     active:bg-dark_topaz
//     focus:border-topaz
//     focus:bg-topaz
//   `,

//   disabled_topaz: tw`
//     bg-transparent
//     text-topaz
//     border-topaz
//   `,
// };

// export const PrimaryButton = styled(Button) <IButtonProps>`
//   ${tw`
//     shadow-none
//     focus:relative
//     hover:bg-transparent
//     hover:active:text-white
//     hover:focus:text-white
//     active:text-white
//     focus:text-white
//   `}
//   text-shadow: none;

//   ${({ topaz }) => (topaz ? primaryStylesMap.topaz : primaryStylesMap.clear_blue)}

//   ${focus};

//   &[disabled] {
//     ${disabled}
//     ${({ topaz }) =>
//     topaz ? primaryStylesMap.disabled_topaz : primaryStylesMap.disabled_clear_blue}
//   }
// `;

// export const DefaultButton = styled(Button) <IButtonProps>`
//   ${tw`
//     shadow-none
//     bg-white
//     rounded-full
//     hover:active:text-white
//     active:text-white
//     focus:text-white
//     focus:relative
//   `}
//   text-shadow: none;

//   ${({ topaz }) => (topaz ? defaultStylesMap.topaz : defaultStylesMap.clear_blue)}

//   ${focus};

//   &[disabled] {
//     ${disabled};
//     ${({ topaz }) =>
//     topaz ? defaultStylesMap.disabled_topaz : defaultStylesMap.disabled_clear_blue}
//   }

//   &.tree-btn {
//     ${tw`
//       rounded-3
//       inline-block
//       bg-white
//       border-dashed
//       text-p2
//       font-light
//       px-12
//       max-h-33
//     `};
//     border-width: 1px;
//     width: fit-content;

//     &:focus {
//       &:after {
//         content: '';
//         ${tw`
//           absolute
//           bg-transparent
//           border-light_blue
//           border-solid
//           rounded-3
//         `};
//         border-width: 1px;
//         top: -4px;
//         left: -4px;
//         width: calc(100% + 8px);
//         height: 39px;
//       }
//     }

//     &:hover,
//     &:focus {
//       ${tw`bg-clear_blue`};
//     }
//   }

//   &.smallFocusHeight {
//     &:focus {
//       &:after {
//         height: 36px;
//       }
//     }
//   }
// `;

// export const CancelButton = styled(Button) <IButtonProps>`
//   ${tw`
//     shadow-none
//     bg-orange
//     text-white
//     hover:text-orange
//     hover:border-orange
//     hover:bg-transparent
//     hover:active:text-white
//     hover:active:border-dark_orange
//     hover:active:bg-dark_orange
//     active:text-white
//     active:border-dark_orange
//     active:bg-dark_orange
//     focus:text-white
//     focus:border-orange
//     focus:bg-orange
//     focus:relative
//   `};
//   text-shadow: none;
//   ${focus};

//   &[disabled] {
//     ${disabled}
//     ${tw`
//       border-orange
//       bg-orange
//     `}
//   }
// `;

// export const SideButton = styled(Button)`
//   ${tw`bg-clear_blue border-clear_blue rounded-none py-16 px-48 w-full hover:bg-dark_clear_blue hover:border-dark_clear_blue hover:text-white text-p1 uppercase focus:text-white focus:border-clear_blue focus:bg-clear_blue focus:relative`};
//   height: 60px;

//   ${focusSide};
// `;

// export const GhostButton = styled(Button) <IButtonProps>`
//   ${({ topaz, clearblue }) =>
//     topaz
//       ? tw`
//       shadow-none
//       bg-transparent
//       border-topaz
//       text-topaz
//       hover:border-topaz
//       hover:text-white
//       hover:bg-topaz
//       hover:active:text-white
//       hover:active:border-dark_topaz
//       hover:active:bg-dark_topaz
//       active:text-white
//       active:border-dark_topaz
//       active:bg-dark_topaz
//       focus:text-white
//       focus:border-topaz
//       focus:bg-topaz
//       focus:relative
//     `
//       : clearblue
//         ? tw`shadow-none bg-transparent border-clear_blue text-clear_blue rounded-full hover:text-white hover:border-clear_blue hover:bg-clear_blue hover:active:text-white hover:active:border-dark_clear_blue hover:active:bg-dark_clear_blue active:text-white active:border-dark_clear_blue active:bg-dark_clear_blue focus:text-white focus:border-clear_blue focus:bg-clear_blue focus:relative`
//         : tw`shadow-none bg-transparent border-orange text-orange rounded-full hover:text-white hover:border-orange hover:bg-orange hover:active:text-white hover:active:border-dark_orange hover:active:bg-dark_orange active:text-white active:border-dark_orange active:bg-dark_orange focus:text-white focus:border-orange focus:bg-orange focus:relative`}

//   text-shadow: none;

//   ${focusGhost};

//   &[disabled] {
//     ${disabled}
//     ${({ topaz, clearblue }) =>
//     topaz
//       ? tw`border-topaz bg-transparent text-topaz`
//       : clearblue
//         ? tw`border-clear_blue bg-transparent text-clear_blue`
//         : tw`border-orange bg-orange`}
//   }
// `;

// export const LinkButton = styled(Button) <IButtonProps>`
//   ${tw`
//     shadow-none
//     text-p1
//     font-light
//     p-0
//     border-0
//     border-clear_blue
//     rounded-none
//     border-dashed
//     focus:border-clear_blue
//     focus:text-clear_blue
//     hover:text-orange
//     hover:border-orange
//     hover:border-dashed
//   `};
//   height: inherit;
//   text-shadow: none;

//   ${({ hideborder }) => hideborder && tw`border-b-0 hover:border-b-0`};

//   &[disabled] {
//     ${tw`
//       text-clear_blue
//       opacity-50
//       pointer-events-none
//       border-0
//       border-clear_blue
//       border-dashed
//     `}
//   }
// `;
