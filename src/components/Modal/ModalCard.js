import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function ModalCard() {
  const context = useContext(GlobalContext);

  const { isOpen, setIsOpen, flow, setFlow } = context;

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"220px"}
            w={"450px"}
          >
            {flow === 1 ? (
              <>
                <Heading>GOTCHA!</Heading>
                <Text>O Pokémon foi adicionado a sua Pokédex</Text>
              </>
            ) : (
              <>
                <Heading>Oh, no!</Heading>
                <Text>O Pokémon foi removido da sua Pokedéx</Text>
              </>
            )}
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCard;
