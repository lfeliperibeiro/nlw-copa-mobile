import { Heading, VStack } from 'native-base'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
export function Find() {
  return (
    <VStack flex={1} bgColor={'gray.900'}>
      <Header title={'Buscar por código'} showBackButton />
      <VStack mx={5} alignItems="center">
        <Heading
          fontFamily={'heading'}
          color={'white'}
          fontSize={'xl'}
          my={8}
          textAlign={'center'}
          mb={8}
        >
          Encontre um bolão através de {'\n'}seu código único
        </Heading>
        <Input mb={1} placeholder={'Qual o código do bolão?'} />
        <Button title={'BUSCAR BOLÃO'} mt={2} />
      </VStack>
    </VStack>
  )
}
