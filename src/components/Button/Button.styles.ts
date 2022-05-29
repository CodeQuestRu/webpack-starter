import { css } from '@emotion/css';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Button } from 'antd';


export const PrimaryButton = Button;


// Состояние `disabled`
// const disabled = tw`
//   text-white 
//   opacity-50 
//   pointer-events-none
// `;

// Состояние `focus`
// const focus = css`
//   &:focus {
//     &:after {      
//       ${tw`
//         absolute 
//         bg-transparent 
//         border-blue-light
//         border-solid 
//         border 
//         rounded-full
//       `};
//       content: '';
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


// Кнопка Primary
// export const PrimaryButton = styled(Button)`
//   ${tw`
//     shadow-none 

//     focus:relative 
//     focus:text-white

//     active:text-white 

//     hover:bg-transparent 
//     hover:active:text-white 
//     hover:focus:text-white     
//   `}
//   text-shadow: none;
// `;


// const focusGhost = css`
//   &:focus {
//     &:after {
//       content: '';
//       ${tw`absolute bg-transparent border border-light_blue border-solid rounded-full`};
//       top: -4px;
//       left: -4px;
//       width: calc(100% + 8px);
//       height: calc(100% + 8px);
//     }
//   }
// `;



// // Не работает интерполяция строк для макроса tw,
// // необходимо указывать классы для каждого цвета.
// // https://github.com/ben-rogerson/twin.macro/issues/17
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
//   disabled_clear_blue: tw`bg-clear_blue border-clear_blue`,

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
//   disabled_topaz: tw`bg-topaz border-topaz`,
// };




// Кнопка по умолчанию
// export const DefaultButton = styled(Button)`
//   ${tw`
//     shadow-none 
//     bg-white 
//     rounded-full 

//     active:text-white   
    
//     focus:text-white 
//     focus:relative

//     hover:active:text-white 
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
//     ${tw`border rounded-3 inline-block bg-white border-dashed text-p2 font-light px-12 max-h-33`};
//     width: fit-content;

//     &:focus {
//       &:after {
//         content: '';
//         ${tw`absolute bg-transparent border-light_blue border-solid border rounded-3`};
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

// export const CancelButton = styled(Button)`
//   ${tw`shadow-none hover:text-orange hover:border-orange hover:bg-transparent hover:active:text-white hover:active:border-dark_orange hover:active:bg-dark_orange active:text-white active:border-dark_orange active:bg-dark_orange focus:text-white focus:border-orange focus:bg-orange focus:relative`};
//   text-shadow: none;
//   ${focus};

//   &[disabled] {
//     ${disabled}
//     ${tw`border-orange bg-orange`}
//   }
// `;

// // export const SideButton = styled(Button)`
// //   ${tw`bg-clear_blue border-clear_blue rounded-none py-16 px-48 w-full hover:bg-dark_clear_blue hover:border-dark_clear_blue hover:text-white text-p1 uppercase focus:text-white focus:border-clear_blue focus:bg-clear_blue focus:relative`};
// //   height: 60px;

// //   ${focusSide};
// // `;

// export const GhostButton = styled(Button)`
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
//       ? tw`shadow-none bg-transparent border-clear_blue text-clear_blue rounded-full hover:text-white hover:border-clear_blue hover:bg-clear_blue hover:active:text-white hover:active:border-dark_clear_blue hover:active:bg-dark_clear_blue active:text-white active:border-dark_clear_blue active:bg-dark_clear_blue focus:text-white focus:border-clear_blue focus:bg-clear_blue focus:relative`
//       : tw`shadow-none border-orange text-orange rounded-full hover:text-white hover:border-orange hover:bg-orange hover:active:text-white hover:active:border-dark_orange hover:active:bg-dark_orange active:text-white active:border-dark_orange active:bg-dark_orange focus:text-white focus:border-orange focus:bg-orange focus:relative`}

//   text-shadow: none;

//   ${focusGhost};

//   &[disabled] {
//     ${disabled}
//     ${({ topaz, clearblue }) =>
//       topaz
//         ? tw`border-topaz bg-transparent text-topaz`
//         : clearblue
//         ? tw`border-clear_blue bg-transparent text-clear_blue`
//         : tw`border-orange bg-orange`}
//   }
// `;

// export const LinkButton = styled(Button)`
//   ${tw`shadow-none text-p1 font-light p-0 border-0 border-b border-clear_blue rounded-none border-dashed focus:border-clear_blue focus:text-clear_blue hover:text-orange hover:border-b hover:border-orange hover:border-dashed`};
//   height: inherit;
//   text-shadow: none;
//   ${({ hideborder }) => hideborder && tw`border-b-0 hover:border-b-0`};
//   &[disabled] {
//     ${tw`text-clear_blue opacity-50 pointer-events-none border-0 border-b border-clear_blue border-dashed`}
//   }
// `;
