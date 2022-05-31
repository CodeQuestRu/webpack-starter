import React, { forwardRef } from 'react';
import IButtonProps, { TType } from './Button.types';


// import { PrimaryButton } from './Button.styles';


// const ButtonComponent = ({ type, ...props }: IButtonProps) => {
//   return (
//     <PrimaryButton
//       danger={type === 'danger'}
//       {...props}
//     />
//   );
// }

// export default ButtonComponent;

// import * as MyArr from './Button.styles';
// console.log(MyArr.DangerButton);

import {
  DangerButton,
  DefaultButton,
  GhostButton,
  LinkButton,
  PrimaryButton,
} from './Button.styles';

// // TODO: расширить свойство type (добавить 'danger'), пока что any
// // type ButtonType = ButtonProps['type'] | 'danger';
// // export type IProps = Omit<ButtonProps, 'type'> & { type?: ButtonType; topaz?: boolean };

// interface IProps extends ButtonProps {
//   type?: "link" | "ghost" | "default" | "primary";
//   topaz?: boolean;
//   clearblue?: boolean;
//   hideborder?: boolean;
// }

interface IComponentMap {
  primary: any;
  danger: any;
  ghost: any;
  link: any;
  default: any;
}

const Button = forwardRef(({ type = 'default', ...props }: IButtonProps, ref) => {
  const componentMap: IComponentMap = {
    primary: PrimaryButton,
    danger: DangerButton,
    ghost: GhostButton,
    link: LinkButton,
    default: DefaultButton,
  };

  // const type = props.type ?? 'default';

  const BtnComponent = componentMap[type];

  const buttonProps = {
    ref,
    type: 'default',
    ...props,

    // чтобы react не кидал warning
    topaz: props.topaz ? String(props.topaz) : undefined,
    clearblue: props.clearblue ? String(props.clearblue) : undefined,
    hideborder: props.hideborder ? String(props.hideborder) : undefined,
  };

  return <BtnComponent {...buttonProps} danger={type === 'danger'} />;
});

export default Button;
