import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Welcome, my name is William";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    islightBackground
    backgroundColor="#fff2e6"
  >
    <VStack spacing={10}>

      <VStack>
        <Avatar name="William" src="https://media.licdn.com/dms/image/D5603AQFsL_rpquak2w/profile-displayphoto-shrink_400_400/0/1683249289069?e=1701302400&v=beta&t=dJXa4VtpRwNS1EM4z0KvbhkDe7kbIfc8ksbDFIePVz4" size="xl" />
        <Heading size="xs">{greeting}</Heading>
      </VStack>

      <VStack>
        <Heading size="2xl">{bio1}</Heading>
        <Heading size="2xl">{bio2}</Heading>
      </VStack>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;