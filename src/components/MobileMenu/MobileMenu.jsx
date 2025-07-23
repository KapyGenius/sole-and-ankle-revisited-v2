import React from "react";
import styled from "styled-components";

import { UnstyledDialogClose } from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";

const MobileMenu = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlayWrapper>
          <DialogContentWrapper>
            <DialogTitle/>
            <DialogDescription/>
            <StyledDialogClose>
                <Icon id="close" strokeWidth={1} />
                <VisuallyHidden>Close menu</VisuallyHidden>
            </StyledDialogClose>
            <Spacer />
            <Nav>
              <Link href="/sale" isActive={document.location.pathname == "/sale"}>Sale</Link>
              <Link href="/new">New&nbsp;Releases</Link>  
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/kids">Kids</Link>
              <Link href="/collections">Collections</Link>
            </Nav>
            <Footer>
              <LinkFooter href="/terms">Terms and Conditions</LinkFooter>
              <LinkFooter href="/privacy">Privacy Policy</LinkFooter>
              <LinkFooter href="/contact">Contact Us</LinkFooter>
            </Footer>
          </DialogContentWrapper>
        </DialogOverlayWrapper>
      </DialogPortal>
    </Dialog>
  );
};

const DialogOverlayWrapper = styled(DialogOverlay)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
`;
const DialogContentWrapper = styled(DialogContent)`
  background: white;
  padding: 20px;
  width: min(90%, 400px);
  display: flex;
  flex-direction: column;
`

const StyledDialogClose = styled(UnstyledDialogClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => (props.isActive ? 'hsl(240, 60%, 63%)' : 'inherit')};
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;

`;

const Footer = styled.footer`
flex: 1;
display: flex;
flex-direction: column;
gap: 8px;
justify-content: flex-end;
`;

const LinkFooter = styled.a`
  text-decoration: none;
  color: hsl(210, 8%, 45%);
`;



export default MobileMenu;
