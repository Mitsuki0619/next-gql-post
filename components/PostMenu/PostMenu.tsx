import {
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { MdDelete, MdEdit } from 'react-icons/md'

export const PostMenu: React.FC = () => {
    return (
        <Menu>
            <MenuButton
                bgColor={'transparent'}
                aria-label={'post menu'}
                color={'gray.500'}
            >
                <BsThreeDots fontSize={'24'} />
            </MenuButton>
            <MenuList zIndex={'15'}>
                <MenuItem icon={<MdDelete color="red" />}>
                    <Text color={'red.500'}>投稿を削除</Text>
                </MenuItem>
                <MenuItem icon={<MdEdit />}>
                    <Text>投稿を編集</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
