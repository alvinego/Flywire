import React from 'react'
import {Button} from 'react-scroll'

import {
    InfoContainer, 
    InfoRow, 
    InfoWrapper, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading,
    ImgWrap,
    Img, 
    Subtitle, 
    BtnWrap} from './InfoElements'

const InfoSection = () => {
    return (
        <>
          <InfoContainer>
            <InfoWrapper>
              <InfoRow>
                <Column1>
                  <TextWrapper>
                    <TopLine>Topline</TopLine>
                    <Heading>Heading</Heading>
                    <Subtitle>Subtitle</Subtitle>
                    <BtnWrap>
                        <Button to='home'/>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                    <Img />
                  </ImgWrap>
                </Column2>
              </InfoRow>
            </InfoWrapper>    
          </InfoContainer>  
        </>
    )
}

export default InfoSection
