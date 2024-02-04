import { getNameInitials } from "@/utils";
import {Avatar as AntdAvatar, AvatarProps} from 'antd';

type IAvatarProps = AvatarProps & {
    name?: string;
}

export const CustomAvatar = ({name, style, ...rest}: IAvatarProps) => {
  return (
    <AntdAvatar
        alt={"Naman Jain"}
        size="small"
        style={{
            backgroundColor: '#87d068',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            ...style
        }}
        {...rest}
    >
        {getNameInitials(name??'')}
    </AntdAvatar>
  )
}

