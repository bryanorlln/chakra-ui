import { Center, Button, ButtonGroup, Text, Wrap, WrapItem} from '@chakra-ui/react'

function Header(){
return(
    <div>
        
    <Center backgroundImage="url('/suzukibanner.jpg')" backgroundPosition="center" h='200px' w='900px'  color='white'>
        <div className='header'>
        <Text fontSize='3xl' fontFamily='agrandir'>DOMINA EL TERRENO</Text>
            <br />
        <ButtonGroup gap='4'>
            <Button colorScheme='blackAlpha' borderColor='white' borderRadius='0px'>Ver Detalles</Button>
            <Button colorScheme='blackAlpha' borderColor='white' borderRadius='0px'>Ver Videos</Button>
        </ButtonGroup>
        </div>
        
    </Center>
    <br />
        <Wrap>
            <WrapItem>
                <Center backgroundImage="url('/suzukiyz.jpg')" backgroundSize="cover" w='350px' h='300px'>
                    <div>
                    <Text fontSize='3xl' fontFamily='agrandir' color='azure'>DOMINA EL TERRENO</Text>
                    <Button colorScheme='blackAlpha' borderColor='white' borderRadius='0px' w='300px'>Ver Detalles</Button>
                    <br />
                    <br />
                    <Button colorScheme='blackAlpha' borderColor='white' borderRadius='0px' w='300px'>Ver Detalles</Button>
                    </div>
                </Center>
            </WrapItem>
        </Wrap>
    </div>
)

}

export default Header;