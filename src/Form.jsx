import React,{useState} from 'react'
import { Container , Heading, InputGroup,Input,InputRightElement,Button,InputLeftAddon,Stack,HStack,PinInput,PinInputField,Box,useColorMode,useColorModeValue} from '@chakra-ui/react'
import { MoonIcon,SunIcon } from '@chakra-ui/icons'

const Form = () => {
    const [show, setShow] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [text, setText] = React.useState("Sign up")
    const [otp, setOtp] = useState("")
    const handleClick = () => setShow(!show)
    const {colorMode,toggleColorMode} = useColorMode();
    const boxStyle={
        border:"2px solid grey",
        height:"3em",
        width:"10rem",
        align:"center",
        margin:"20px 0px"
    }
 

  return (
    <Container border="1px solid red" maxWidth='md' p="5" borderRadius="10px">
        <Button onClick={toggleColorMode} >{colorMode==="light"?<MoonIcon/>:<SunIcon/>}</Button>
        <Heading size='md'>Form</Heading>

            <Stack gap=".5rem">
        <InputGroup  size='md' m="5px 0px">
    <InputLeftAddon children='Email' />
    <Input type='email' placeholder='@gmail.com' htmlSize={40} width='auto'/>
  </InputGroup>
        <InputGroup size='md' width="420px" m="20px 0px">
      <Input 
        pr='4.5rem' htmlSize={42} width='auto'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Button bg={"primaryColor.color"}  colorScheme='teal' variant='outline' size='md' w="150px" onClick={()=>{
        setIsLoading(true)
         setTimeout(()=>{
             setText("Submitted")
             setIsLoading(false)
        },1000)
         setTimeout(()=>{
             setText("Sign Up")
        },2000)
        }}  isLoading={isLoading}>
    {text}
  </Button>
  <HStack bg={useColorModeValue('red.500', 'red.200')}>
  <PinInput value={otp} onChange={(value)=>{setOtp(value)}} >
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
      </Stack>
      <Box {...boxStyle}  fontSize='3xl'>{otp}</Box>
      <Box {...boxStyle} fontSize='3xl'></Box>


        </Container>
  )
}

export default Form