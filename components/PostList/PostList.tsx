import { List, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { PostItem } from './PostItem/PostItem'

export const PostList: React.FC = () => {
    return (
        <List>
            <ListItem>
                <NextLink href="/">
                    <PostItem />
                </NextLink>
            </ListItem>
            <ListItem>
                <NextLink href="/">
                    <PostItem />
                </NextLink>
            </ListItem>
            <ListItem>
                <NextLink href="/">
                    <PostItem />
                </NextLink>
            </ListItem>
            <ListItem>
                <NextLink href="/">
                    <PostItem />
                </NextLink>
            </ListItem>
            <ListItem>
                <NextLink href="/">
                    <PostItem />
                </NextLink>
            </ListItem>
            <ListItem>
                <NextLink href="/">
                    <PostItem />
                </NextLink>
            </ListItem>
        </List>
    )
}
