import { ReactNode } from "react";
import {
  Box,
  Text,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

const Links = [{ title: "Home", route: "/" }];

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.200", "gray.900")} px={4} w="full">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box fontSize="2xl" fontWeight="extrabold" as="i" pr={{ md: "20" }}>
            AlphaBiDiary
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link, i) => (
              <Link key={i} href={link.route}>
                {link.title}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Show above="md">
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              Article
            </Button>
          </Show>
          <Show above="md">
            <Button onClick={toggleColorMode} mr="4">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Show>
          <Menu>
            <HStack>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <Show above="md">
                <VStack gap="0px" align="flex-start" spacing="0px">
                  <Text fontSize={12}>Hi, Sample Khan</Text>
                  <Text fontSize={10}>Sample@sample.com</Text>
                </VStack>
              </Show>
            </HStack>
            <MenuList fontSize={12} p="0.5" m="0.5">
              <MenuItem>My Posts</MenuItem>
              <MenuItem>Notifications</MenuItem>
              <MenuDivider />
              <MenuItem>Edit Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link, i) => (
              <Text key={link.title}>{link.title}</Text>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
