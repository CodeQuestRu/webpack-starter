import React, { forwardRef } from 'react';
// import './button.d.ts1';
import { ButtonProps } from 'antd/lib/button/button';


import { PrimaryButton } from './Button.styles';

export default PrimaryButton;

// import {
//   CancelButton,
//   DefaultButton,
//   GhostButton,
//   LinkButton,
//   PrimaryButton,
// } from './Button.styles';

// // TODO: расширить свойство type (добавить 'danger'), пока что any
// // type ButtonType = ButtonProps['type'] | 'danger';
// // export type IProps = Omit<ButtonProps, 'type'> & { type?: ButtonType; topaz?: boolean };

// interface IProps extends ButtonProps {
//   type?: "link" | "ghost" | "default" | "primary";
//   topaz?: boolean;
//   clearblue?: boolean;
//   hideborder?: boolean;
// }

// interface IComponentMap {
//   primary: any;
//   danger: any;
//   ghost: any;
//   link: any;
//   default: any;
// }

// const Button = forwardRef((props: IProps, ref) => {
//   const componentMap: IComponentMap = {
//     primary: PrimaryButton,
//     danger: CancelButton,
//     ghost: GhostButton,
//     link: LinkButton,
//     default: DefaultButton,
//   };

//   const type = props.type ?? 'default';

//   const BtnComponent = componentMap[type];

//   const buttonProps = {
//     ref,
//     type: 'default',
//     ...props,

//     // чтобы react не кидал warning
//     topaz: props.topaz ? String(props.topaz) : undefined,
//     clearblue: props.clearblue ? String(props.clearblue) : undefined,
//     hideborder: props.hideborder ? String(props.hideborder) : undefined,
//   };

//   return <BtnComponent {...buttonProps} />;
// });

// export default Button;
