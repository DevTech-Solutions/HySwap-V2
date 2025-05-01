import React, { useEffect } from 'react'
import styled from 'styled-components'
import { X } from 'react-feather'
import Modal from '../Modal'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/actions'

const CloseIcon = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 10;
  padding: 6px;
  border-radius: 8px;
  background: ${({ theme }) => theme.bg1};
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    right: 8px;
    top: 8px;
  `};
`

const ContentWrapper = styled.div`
  padding: 32px;
  width: 100%;
  max-width: 500px;
  position: relative;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 20px;
  `};
`

const Title = styled.h2`
  margin-bottom: 0rem;
  font-weight: 900;
  text-align: center;
  margin-top: 10px;
`
const SubHeading = styled.h4`
  margin-bottom: 1rem;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5px;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 250px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PromoImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
`

const Content = styled.div`
  margin-top: 1rem;
  text-align: center;
`

export default function NewChainModal() {
  const isOpen = useModalOpen(ApplicationModal.CHAIN_PROMO)
  const toggleModal = useToggleModal(ApplicationModal.CHAIN_PROMO)

  useEffect(() => {
    toggleModal()
    return () => {
      if (isOpen) {
        toggleModal()
      }
    }
  }, [])

  return (
    <Modal isOpen={isOpen} onDismiss={toggleModal}>
      <ContentWrapper>
        <CloseIcon onClick={toggleModal}>
          <X size={20} />
        </CloseIcon>
        <Title>APECHAIN</Title>
        <SubHeading>IS NOW SUPPORTED!</SubHeading>
        <ImageWrapper>
          <PromoImage 
            src="/images/promo-image.png" 
            alt="ApeChain Promo"
          />
        </ImageWrapper>
        <Content>
          <p></p>
        </Content>
      </ContentWrapper>
    </Modal>
  )
}
