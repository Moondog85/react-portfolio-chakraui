import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faEtsy,
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { transform } from "framer-motion";

const socials = [
  { 
     icon: faEtsy,
    url: "mailto: https://https://www.etsy.com/shop/gnarlygraindesign",
  },
  {
    icon: faGithub,
    url: "https://github.com/Moondog85",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/william-christian7",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

    // Handle header show/hide animation depending on the scroll direction
    const headerRef = useRef(null);

    useEffect(() => {
      let prevScrollPos = window.scrollY;
  
      // Handle scroll events
      const handleScroll = () => {
        const currScrollPos = window.scrollY;
        const currHeaderElement = headerRef.current;
  
        if (!currHeaderElement){
          return;
        }        
              if (prevScrollPos > currScrollPos) {
          currHeaderElement.style.transform = "translateY(0)";
        } else {
          currHeaderElement.style.transform = "translateY(-200px)";
        }
        
        prevScrollPos = currScrollPos;
      };
  
      // Set up listeners for the scroll event
      window.addEventListener("scroll", handleScroll);
  
      // Remove listeners for the scroll event
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#404040"  //"#130612"
      //#130612 dark purple
    >
      <Box color=" #fff2e6" transitionTimingFunction={"ease-in-out"} maxWidth="1280px" margin="0 auto"
        _hover={{
           color: "#7fffd4",
           transitionDuration: '.5s',
           transitionTimingFunction: "ease-in-out"
        }}

      //#e6f2ff - bluewhite
      >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={6}>
              {socials.map(({icon, url}) => (
                <a key={url} href={url} icon={icon} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon key={url} icon={icon} size="2x"/>
                </a>
              ))}
            
            </HStack>
          </nav>
          <nav>
              <HStack spacing={3} fontWeight={"bold"}
                _hover={{
                 color: "#ff1a75",
                 transitionDuration: '.5s',
                transitionTimingFunction: "ease-in-out"
               }}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#contactme-section" onClick={handleClick}>Contact Me</a>
              </HStack>
              <HStack spacing={3} fontWeight={"bold"}          
                _hover={{
                   color: "#ff1a75",
                   transitionDuration: '.5s',
                   transitionTimingFunction: "ease-in-out"
                }}>
              <a href="/#projects-section" onClick={handleClick}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
