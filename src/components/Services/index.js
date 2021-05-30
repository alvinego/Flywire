import React from 'react';
import Icon1 from '../../images/svg-9.svg';
import Icon2 from '../../images/svg-4.svg';
import Icon3 from '../../images/svg-10.svg';

import {ServicesCard, ServicesContainer, ServicesWrapper, ServicesH1, ServicesH2, ServicesIcon, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your electricity bills and increase your overall revenue and efficiency</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Online Power Usage</ServicesH2>
                    <ServicesP>Access and Control your power consumption from anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>Join us and unlock our special membership card that returns 7% cash back</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
