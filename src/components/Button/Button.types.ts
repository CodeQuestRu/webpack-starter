import { ButtonProps } from 'antd/lib/button/button';

export type TType = 'default' | 'primary' | 'danger' | 'ghost' | 'link';

export default interface IProps extends Omit<ButtonProps, 'type'> {
  type?: TType;
  topaz?: boolean;
  clearblue?: boolean;
  hideborder?: boolean;
}
