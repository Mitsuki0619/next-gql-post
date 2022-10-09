import { Avatar, Box, Button, Flex, Textarea } from '@chakra-ui/react'
import React from 'react'
import { BsImage } from 'react-icons/bs'
import styles from './PostForm.module.css'

export const PostForm: React.FC = () => {
    return (
        <Box px={'4'}>
            <Flex gap={'4'}>
                <Avatar
                    size={{ base: 'sm', sm: 'md' }}
                    src={''}
                    name={'test'}
                />{' '}
                <Flex
                    w={'full'}
                    pt={{ base: '0', sm: '3' }}
                    direction={'column'}
                    gap={'4'}
                >
                    <Textarea
                        minH={'100'}
                        overflow={'auto'}
                        fontSize={'xl'}
                        w="100%"
                        border={'2px'}
                        focusBorderColor="teal.300"
                        placeholder="いまどうしてる？"
                    ></Textarea>
                    <Flex justifyContent={'space-between'} color={'teal.500'}>
                        <label className={styles.inputImageLabel}>
                            <BsImage size={'24'} />
                            <input className={styles.inputImage} type="file" />
                        </label>
                        <Button
                            colorScheme={'teal'}
                            rounded={'full'}
                            size={'md'}
                            fontSize={'lg'}
                            px={'5'}
                        >
                            ポストする
                        </Button>{' '}
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}
